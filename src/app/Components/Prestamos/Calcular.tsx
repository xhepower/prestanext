"use client";
export default function Calcular({
  intereses,
  cuota,
  total,
  numeroCuotas,
  plan,
}: {
  intereses: number;
  cuota: number;
  total: number;
  numeroCuotas: number;
  plan: { i: number; fecha: Date; elSaldo: number; saldonuevo: number }[];
}) {
  return (
    <div className="plan">
      <h3 className="titulo-tabla">Plan</h3>
      <p className="plan-item">Intereses: {intereses}</p>
      <p className="plan-item">Total: {total}</p>
      <p className="plan-item">Cantidad de cuotas: {numeroCuotas}</p>
      <p className="plan-item">Monto cuota: {cuota}</p>
      <table className="plan-tabla">
        <thead className="plan-encabezado">
          <tr>
            <th>N°</th>
            <th>Fecha</th>
            <th>Saldo</th>
            <th>
              Saldo <br />
              despues de
              <br /> cuota
            </th>
          </tr>
        </thead>
        <tbody>
          {plan.map((item) => {
            return (
              <tr key={`plan${item.i}`}>
                <td>{item.i}</td>
                <td>{`${new Date(item.fecha).toLocaleDateString()}`}</td>
                <td className="plan-numero">{item.elSaldo}</td>
                <td className="plan-numero">{item.saldonuevo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
