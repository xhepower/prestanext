"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSavePrestamo } from "app/app/actions";
const schema = Yup.object().shape({
  //clienteId: Yup.number().required(),
  inicio: Yup.date(),
  vencimiento: Yup.date(),
  capital: Yup.number().positive(),
  porcentaje: Yup.number().min(0),
  porcentajemora: Yup.number().min(0),
  frecuencia: Yup.string(),
});
export function AddPrestamo(props: any) {
  const verificarValor = (id: string) => {
    const inputNumero = document.getElementById(id) as HTMLInputElement;
    if (inputNumero.value.trim() === "") {
      // Si el campo está vacío, establece el valor como cero
      inputNumero.value = "0";
    }
  };
  const formik = useFormik({
    initialValues: {
      inicio: new Date(),
      vencimiento: new Date(),
      capital: 0,
      porcentaje: 0,
      porcentajemora: 0,
      frecuencia: "diario",
    },
    validationSchema: schema,
    onSubmit: async ({
      inicio,
      vencimiento,
      capital,
      porcentaje,
      frecuencia,
      porcentajemora,
    }) => {
      const rta = await handleSavePrestamo({
        inicio,
        vencimiento,
        capital,
        porcentaje,
        frecuencia,
        porcentajemora,
        clienteId: +props.id,
      });
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form method="POST" onSubmit={handleSubmit} className="app-form">
      <h2 className="titulo-form">Añadir prestamo nuevo</h2>
      <label htmlFor="capital" className="app-form-label">
        Capital
      </label>
      <input
        type="number"
        name="capital"
        step={0.01}
        value={values.capital}
        onChange={handleChange}
        onBlur={() => {
          verificarValor("capital");
        }}
        id="capital"
        className="app-form-input input-number"
      />
      {errors.capital && touched.capital && <span>{errors.capital}</span>}
      <label htmlFor="porcentaje" className="app-form-label ">
        Porcentaje
      </label>
      <input
        type="number"
        name="porcentaje"
        step={0.01}
        value={values.porcentaje}
        onChange={handleChange}
        onBlur={() => {
          verificarValor("porcentaje");
        }}
        id="porcentaje"
        className="app-form-input input-number"
      />
      {errors.porcentaje && touched.porcentaje && (
        <span>{errors.porcentaje}</span>
      )}
      <label htmlFor="porcentajemora" className="app-form-label ">
        Porcentaje mora
      </label>
      <input
        type="number"
        name="porcentajemora"
        step={0.01}
        value={values.porcentajemora}
        onBlur={() => {
          verificarValor("porcentajemora");
        }}
        onChange={handleChange}
        id="porcentajemora"
        className="app-form-input input-number"
      />
      {errors.porcentajemora && touched.porcentajemora && (
        <span>{errors.porcentajemora}</span>
      )}
      <label htmlFor="inicio" className="app-form-label ">
        Fecha desembolso
      </label>
      <input
        type="datetime-local"
        name="inicio"
        onChange={handleChange}
        id="inicio"
        className="app-form-input input-number"
      />
      <label htmlFor="vencimiento" className="app-form-label ">
        Fecha vencimiento
      </label>
      <input
        type="datetime-local"
        name="vencimiento"
        onChange={handleChange}
        id="vencimiento"
        className="app-form-input input-number"
      />
      <button type="submit" className="btn-primary">
        Guardar prestamo
      </button>
    </form>
  );
}
