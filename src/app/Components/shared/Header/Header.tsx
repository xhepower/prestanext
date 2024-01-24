import Image from "next/image";
import "./Header.css";
export function Header() {
  console.log(process.env.NOMBRE_EMPRESA);
  return (
    <header>
      <section>
        <div className="banner">
          <h1 className="titulo-banner">{process.env.NOMBRE_EMPRESA}</h1>
        </div>
      </section>
    </header>
  );
}
