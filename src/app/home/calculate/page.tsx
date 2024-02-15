"use client";
import "../../Components/shared/Modal/Modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleCalculate } from "app/app/actions";
import { useEffect, useState } from "react";
import Calcular from "app/app/Components/Prestamos/Calcular";

const schema = Yup.object().shape({
  //clienteId: Yup.number().required(),
  inicio: Yup.date(),
  vencimiento: Yup.date(),
  capital: Yup.number().positive(),
  porcentaje: Yup.number().min(0),
  frecuencia: Yup.string(),
});
interface rtaInterface {
  intereses: number;
  cuota: number;
  total: number;
  numeroCuotas: number;
  plan: { i: number; fecha: Date; elSaldo: number; saldonuevo: number }[];
}
export default function CalculatePage() {
  const [planRta, setPlanRta] = useState<rtaInterface>();

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
      frecuencia: "diario",
    },
    validationSchema: schema,
    onSubmit: async ({
      inicio,
      vencimiento,
      capital,
      porcentaje,
      frecuencia,
    }) => {
      const rta = await handleCalculate({
        inicio,
        vencimiento,
        capital,
        porcentaje,
        frecuencia,
      });

      setPlanRta(rta);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <section className="main-container">
      <div className="rutas-container">
        <form method="POST" onSubmit={handleSubmit} className="app-form">
          <h2 className="titulo-form">Calcular prestamo</h2>
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
          <label htmlFor="fecuencia" className="app-form-label ">
            Frecuencia
          </label>
          <select
            name="frecuencia"
            id="frecuencia"
            value={values.frecuencia}
            onChange={handleChange}
          >
            <option value="diario">Diario</option>
            <option value="semanal">Semanal</option>
            <option value="quincenal">Quincenal</option>
          </select>
          {errors.frecuencia && touched.frecuencia && (
            <span>{errors.frecuencia}</span>
          )}
          <button type="submit" className="btn-primary">
            Calcular prestamo
          </button>
        </form>
        {planRta ? (
          <Calcular
            intereses={planRta?.intereses}
            cuota={planRta?.cuota}
            total={planRta?.total}
            numeroCuotas={planRta?.numeroCuotas}
            plan={planRta?.plan}
          ></Calcular>
        ) : null}
      </div>
    </section>
  );
}
