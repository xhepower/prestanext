"use client";
import type { NextPage } from "next";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
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
    <form onSubmit={handleSubmit} method="POST">
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
