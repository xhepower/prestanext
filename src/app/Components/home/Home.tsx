import { Ruta } from "../Rutas";
import "./Home.css";
import { RutaInterface } from "app/app/interfaces";
interface propsInterface {
  datos: RutaInterface[];
}
export function Home(props: propsInterface) {
  const { datos } = props;
  return (
    <section className="home">
      {datos?.map((ruta) => {
        const key: string = `ruta${ruta.id}`;

        return <Ruta key={key} ruta={ruta}></Ruta>;
      })}
    </section>
  );
}
