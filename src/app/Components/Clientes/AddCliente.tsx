"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSaveCliente } from "app/app/actions";
const schema = Yup.object().shape({
  name: Yup.string().required(),
  dni: Yup.string().required(),
  city: Yup.string(),
  hood: Yup.string(),
  business: Yup.string(),
  phone1: Yup.string(),
  phone2: Yup.string(),
});
export function AddCliente(props: any) {
  const formik = useFormik({
    initialValues: {
      name: "",
      dni: "",
      city: "",
      hood: "",
      business: "",
      phone1: "",
      phone2: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name, dni, city, hood, business, phone1, phone2 }) => {
      const rta = await handleSaveCliente({
        name,
        dni,
        city,
        hood,
        business,
        phone1,
        phone2,
        rutaId: +props.id,
      });
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form method="POST" onSubmit={handleSubmit} className="app-form">
      <h2 className="titulo-form">Añadir cliente nuevo</h2>
      <label htmlFor="name" className="app-form-label">
        Nombre de Cliente
      </label>
      <input
        type="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        id="name"
        className="app-form-input"
      />
      {errors.name && touched.name && <span>{errors.name}</span>}
      <label htmlFor="dni" className="app-form-label">
        DNI
      </label>
      <input
        type="text"
        name="dni"
        value={values.dni}
        onChange={handleChange}
        id="dni"
        className="app-form-input"
      />
      {errors.dni && touched.dni && <span>{errors.dni}</span>}
      <label htmlFor="city" className="app-form-label">
        Ciudad
      </label>
      <input
        name="city"
        value={values.city}
        onChange={handleChange}
        id="city"
        className="app-form-input"
      />
      {errors.city && touched.city && <span>{errors.city}</span>}
      <label htmlFor="hood" className="app-form-label">
        Barrio
      </label>
      <input
        name="hood"
        value={values.hood}
        onChange={handleChange}
        id="hood"
        className="app-form-input"
      />
      {errors.hood && touched.hood && <span>{errors.hood}</span>}
      <label htmlFor="business" className="app-form-label">
        Negocio
      </label>
      <input
        type="name"
        name="business"
        value={values.business}
        onChange={handleChange}
        id="business"
        className="app-form-input"
      />
      {errors.business && touched.business && <span>{errors.business}</span>}
      <label htmlFor="phone1" className="app-form-label">
        Telefono 1
      </label>
      <input
        type="name"
        name="phone1"
        value={values.phone1}
        onChange={handleChange}
        id="phone1"
        className="app-form-input"
      />
      {errors.phone1 && touched.phone1 && <span>{errors.phone1}</span>}
      <label htmlFor="phone2" className="app-form-label">
        Telefono 2
      </label>
      <input
        type="name"
        name="phone2"
        value={values.phone2}
        onChange={handleChange}
        id="phone2"
        className="app-form-input"
      />
      {errors.phone2 && touched.phone2 && <span>{errors.phone2}</span>}
      <button type="submit" className="btn-primary">
        Guardar cliente
      </button>
    </form>
  );
}
// inicio,
//         vencimiento,
//         capital,
//         porcentaje,
//         frecuencia,
//         porcentajemora,
//         clienteId: +props.id,
