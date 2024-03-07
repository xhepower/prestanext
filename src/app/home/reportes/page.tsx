"use client";
import "../../Components/shared/Modal/Modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleCalculate, handleReporte } from "app/app/actions";
import { useEffect, useState } from "react";
import Calcular from "app/app/Components/Prestamos/Calcular";
import { Reporte } from "app/app/Components/Reportes";

const schema = Yup.object().shape({
  //clienteId: Yup.number().required(),
  inicio: Yup.date(),
  final: Yup.date(),
});

export default function ReportesPage() {
  const [reporte, SetReporte] = useState([]);
  const formik = useFormik({
    initialValues: {
      inicio: new Date(),
      final: new Date(),
    },
    validationSchema: schema,
    onSubmit: async ({ inicio, final }) => {
      const rta = await handleReporte({
        inicio,
        final,
      });
      SetReporte(rta);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="main-container">
      <div className="rutas-container">
        <form method="POST" onSubmit={handleSubmit} className="app-form">
          <h2 className="titulo-form">Reportes</h2>

          <label htmlFor="inicio" className="app-form-label ">
            Inicio Reporte
          </label>
          <input
            type="datetime-local"
            name="inicio"
            onChange={handleChange}
            id="inicio"
            className="app-form-input input-number"
          />
          <label htmlFor="inicio" className="app-form-label ">
            Inicio Reporte
          </label>
          <input
            type="datetime-local"
            name="final"
            onChange={handleChange}
            id="final"
            className="app-form-input input-number"
          />
          <button type="submit" className="btn-primary">
            Crear reporte
          </button>
        </form>

        <Reporte reporte={reporte}></Reporte>
      </div>
    </section>
  );
}
