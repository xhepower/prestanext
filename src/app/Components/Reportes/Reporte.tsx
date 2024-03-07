"use client";

import { useState } from "react";

export function Reporte(props: any) {
  const { prestamos, pagos, sumaPrestamos, sumaPagos } = props.reporte;

  return (
    <div>
      {prestamos ? (
        <details>
          <summary>{`Prestamos ${sumaPrestamos.toFixed(2)}`}</summary>
          <table>
            <thead>
              <tr>
                <th>Inicio</th>
                <th>Cliente</th>
                <th>Capital</th>
              </tr>
            </thead>
            <tbody>
              {prestamos.map((prestamo: any) => {
                return (
                  <tr key={`reportePrestamo${prestamo.id}`}>
                    <td>{prestamo.inicio}</td>
                    <td>{prestamo.cliente.name}</td>
                    <td>{prestamo.capital}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </details>
      ) : null}

      {pagos ? (
        <details>
          <summary>{`Pagos ${sumaPagos.toFixed(2)}`}</summary>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Prestamo</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {pagos.map((pago: any) => {
                return (
                  <tr key={`reportePago${pago.id}`}>
                    <td>{pago.fecha}</td>
                    <td>{pago.prestamo.id}</td>
                    <td>{pago.monto}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </details>
      ) : null}
    </div>
  );
}
