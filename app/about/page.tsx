export default function About() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center neon-text-yellow">Sobre Nosotros</h1>
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold neon-text-red mb-4">¿Quiénes Somos?</h2>
          <p className="text-gray-300 mb-4">
            PIPSA es una empresa especializada en soluciones de impresión digital gran formato, letreros fascia y mobiliario.
          </p>
          <p className="text-gray-300">
            Nuestro equipo trabaja incansablemente para transformar tus ideas en proyectos de calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold neon-text-yellow mb-4">Nuestra Misión</h3>
            <p className="text-gray-300">
              Proporcionar soluciones innovadoras en impresión digital gran formato.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold neon-text-green mb-4">Nuestra Visión</h3>
            <p className="text-gray-300">
              Ser la empresa de referencia en la región, reconocida por nuestra excelencia.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold neon-text-red mb-6">¿Por Qué Elegirnos?</h2>
          <ul className="space-y-3">
            {['Experiencia probada', 'Tecnología de punta', 'Equipo dedicado', 'Entregas puntuales', 'Presupuestos competitivos', 'Atención personalizada', 'Garantía de satisfacción', 'Instalación profesional'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-neon-yellow font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold neon-text-yellow mb-4">¿Listo para Trabajar Juntos?</h2>
          <a href="/contacto" className="inline-block px-8 py-3 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>
  )
}