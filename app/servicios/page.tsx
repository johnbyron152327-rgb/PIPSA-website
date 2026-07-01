export default function Servicios() {
  const servicios = [
    {
      title: 'Impresión Digital Gran Formato',
      description: 'Impresiones de alta resolución en diversos materiales y tamaños.',
      features: ['Resolución hasta 1200 DPI', 'Múltiples materiales', 'Entrega rápida', 'Presupuestos personalizados'],
      icon: '🖨️',
      color: 'neon-red',
    },
    {
      title: 'Letreros Fascia',
      description: 'Letreros corporativos profesionales con acabados de calidad.',
      features: ['Diseño personalizado', 'Instalación incluida', 'Materiales duraderos', 'Garantía de calidad'],
      icon: '📍',
      color: 'neon-yellow',
    },
    {
      title: 'Mueble e Instalación',
      description: 'Fabricación e instalación de mobiliario personalizado.',
      features: ['Diseño a medida', 'Acabados premium', 'Instalación profesional', 'Mantenimiento'],
      icon: '🛠️',
      color: 'neon-green',
    },
  ]

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center neon-text-yellow">Nuestros Servicios</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicios.map((servicio, i) => (
            <div key={i} className="border-2 border-gray-700 rounded-lg p-8 hover:border-neon-red transition">
              <div className="text-6xl mb-4">{servicio.icon}</div>
              <h2 className={servicio.color === 'neon-red' ? 'neon-text-red' : servicio.color === 'neon-yellow' ? 'neon-text-yellow' : 'neon-text-green'}>
                {servicio.title}
              </h2>
              <p className="text-gray-300 my-4">{servicio.description}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {servicio.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className={servicio.color === 'neon-red' ? 'text-neon-red' : servicio.color === 'neon-yellow' ? 'text-neon-yellow' : 'text-neon-green'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/contacto" className="inline-block px-8 py-3 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  )
}