"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSavePago } from "app/app/actions";
const schema = Yup.object().shape({
  monto: Yup.number().required(),
  fecha: Yup.date(),
});
export function AddPago(props: any) {
  const verificarValor = (id: string) => {
    const inputNumero = document.getElementById(id) as HTMLInputElement;
    if (inputNumero.value.trim() === "") {
      // Si el campo está vacío, establece el valor como cero
      inputNumero.value = "0";
    }
  };
  const formik = useFormik({
    initialValues: {
      monto: 0,
      fecha: new Date(),
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ monto, fecha }) => {
      const rta = await handleSavePago({
        monto,
        fecha,
        prestamoId: +props.id,
      });
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form method="POST" onSubmit={handleSubmit} className="app-form">
      <h2 className="titulo-form">Añadir pago nuevo</h2>
      <label htmlFor="capital" className="app-form-label">
        Monto
      </label>
      <input
        type="number"
        name="monto"
        step={0.01}
        value={values.monto}
        onChange={handleChange}
        onBlur={() => {
          verificarValor("monto");
        }}
        id="monto"
        className="app-form-input input-number"
      />
      {errors.monto && touched.monto && <span>{errors.monto}</span>}
      <label htmlFor="fecha" className="app-form-label ">
        Fecha
      </label>
      <input
        type="datetime-local"
        name="fecha"
        onChange={handleChange}
        id="fecha"
        className="app-form-input input-number"
      />
      <button type="submit" className="btn-primary">
        Guardar pago
      </button>
    </form>
  );
}
