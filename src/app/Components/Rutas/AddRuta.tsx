"use client";
import type { NextPage } from "next";

import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSaveRuta, redirigir } from "app/app/actions";

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
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre de Ruta</label>
      <input
        type="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        id="name"
      />
      {errors.name && touched.name && <span>{errors.name}</span>}
      <button type="submit">Guardar usuario</button>
    </form>
  );
}
