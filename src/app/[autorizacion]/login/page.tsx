"use client";
import type { NextPage } from "next";

import { useFormik } from "formik";
import * as Yup from "yup";

// Yup schema to validate the form
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(1),
});
import { handleLogin } from "app/app/actions";

const Login: NextPage = (props) => {
  // Formik hook to handle the form state

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email, password }) => {
      const token = await handleLogin(email, password);
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} method="POST" className="form form-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        id="email"
        className="input input-login"
      />
      {errors.email && touched.email && <span>{errors.email}</span>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        id="password"
        className="input input-login"
      />
      {errors.password && touched.password && <span>{errors.password}</span>}

      <button type="submit" className="button button-primary button-login">
        Ingresar
      </button>
    </form>
  );
};

export default Login;
