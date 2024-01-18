export default function auth({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>HDP AUTH</h1>
      {children}
    </main>
  );
}
