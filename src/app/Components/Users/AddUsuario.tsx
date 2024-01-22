"use client";
import type { NextPage } from "next";

import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSaveUser } from "app/app/actions";

// Yup schema to validate the form
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(1),
  role: Yup.string().required(),
});
export function AddUser(props: any) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "cobrador",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email, password, role }) => {
      const rta = await handleSaveUser(email, password, role);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        id="email"
      />
      {errors.email && touched.email && <span>{errors.email}</span>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        id="password"
      />
      {errors.password && touched.password && <span>{errors.password}</span>}

      <label htmlFor="role">Elija un rol</label>
      <select
        id="role"
        name="roles"
        value={values.password}
        onChange={handleChange}
      >
        <option value="admin">Admin</option>
        <option value="cobrador">Cobrador</option>
      </select>
      {errors.role && touched.role && <span>{errors.role}</span>}
      <button type="submit">Guardar usuario</button>
    </form>
  );
}
