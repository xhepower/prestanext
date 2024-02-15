"use client";

import { useState } from "react";

export function Reporte(props: any) {
  const { prestamos, pagos } = props.reporte;
  console.log(prestamos, pagos);
  const [sPrestamos, setSprestamos] = useState(0);
  let sumaPrestamos = 0;
  return (
    <div>
      {prestamos ? (
        <details>
          <summary>{`Prestamos ${sumaPrestamos}`}</summary>
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
                sumaPrestamos += prestamo.capital;
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
          {/* {prestamos.map((prestamo: any) => {
            return (
              <div key={`reportePrestamo${prestamo.id}`}>
                <p>{prestamo.inicio}</p>
              </div>
            );
          })} */}
        </details>
      ) : null}

      {pagos ? (
        <details>
          <summary>Pagos </summary>
        </details>
      ) : null}
    </div>
  );
}
