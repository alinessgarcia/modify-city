export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4" style={{ color: "#00cc88" }}>
        🌆 Modify City
      </h1>
      <p className="mb-4">
        Projeto inicial para modificar paisagens urbanas digitalmente.
      </p>

      <div className="mt-4">
        <p className="mb-2">
          🚧 Em breve, vamos permitir que usuários adicionem:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>🌳 Arborismo</li>
          <li>🎨 Pintura de muros</li>
          <li>🛣️ Reformas em ruas</li>
        </ul>
      </div>
    </main>
  );
}
