import Link from "next/link";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <button>usuarios</button>
          </li>
          <li>
            <button>calcular</button>
          </li>
          <li>
            <button>actualizar</button>
          </li>
          <li>
            <button>cerrar sesion</button>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
