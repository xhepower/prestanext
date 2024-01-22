"use client";
import Link from "next/link";
import "./Modal.css";
export function Modal({
  children,
  redir,
}: {
  children: React.FC;
  redir: string;
}) {
  console.log(redir);
  return (
    <>
      <div className="modal">
        <div className="overlay">
          <Link href={redir}>Cerrar</Link>
        </div>

        {children}
      </div>
    </>
  );
}
