import Link from "next/link";

import { Ruta } from "../Rutas";
import "./Home.css";
import { RutaInterface } from "app/app/interfaces";
interface propsInterface {
  datos: RutaInterface[];
  idAdmin: number | null;
  role: string;
}
export function Home(props: propsInterface) {
  const { datos, idAdmin, role } = props;
  return (
    <section className="main-container">
      <div className="rutas-container">
        {datos?.map((ruta) => {
          const key: string = `ruta${ruta.id}`;

          return <Ruta key={key} ruta={ruta} dropVisible={true}></Ruta>;
        })}
      </div>
    </section>
  );
}
