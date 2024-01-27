"use client";
import type { NextPage } from "next";

import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSaveRuta } from "app/app/actions";

// Yup schema to validate the form
const schema = Yup.object().shape({
  name: Yup.string().required(),
  userId: Yup.number().required(),
});
export function AddRuta(props: any) {
  const formik = useFormik({
    initialValues: {
      name: "",
      userId: 0,
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name, userId }) => {
      const rta = await handleSaveRuta(name, +props.id);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form method="POST" onSubmit={handleSubmit} className="app-form">
      <h2 className="titulo-form"> Añadir ruta nueva</h2>
      <label htmlFor="name" className="app-form-label">
        Nombre de Ruta
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
      <button type="submit" className="btn-primary">
        Guardar ruta
      </button>
    </form>
  );
}
