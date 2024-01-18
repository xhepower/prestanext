import Image from "next/image";
export function Header() {
  return (
    <header>
      <section>
        <Image
          src="/images/banner.png"
          alt="banner header"
          width={300}
          height={100}
        />
      </section>
    </header>
  );
}
