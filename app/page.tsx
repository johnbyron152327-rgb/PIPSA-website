import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="neon-text-red">PIPSA</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-4 neon-text-yellow">
            Impresión Digital Gran Formato
          </p>
          <p className="text-xl text-dark-text mb-8 max-w-2xl mx-auto">
            Especialistas en letreros fascia, mueble e instalación. Transforma tu visión en realidad.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/proyectos"
              className="px-8 py-3 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-3 border-2 border-neon-green text-neon-green font-bold rounded hover:bg-neon-green hover:text-black transition"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center neon-text-yellow">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Impresión Gran Formato', desc: 'Impresión de alta calidad en materiales diversos', icon: '🖨️', color: 'neon-red' },
              { title: 'Letreros Fascia', desc: 'Letreros corporativos con excelente presentación', icon: '📍', color: 'neon-yellow' },
              { title: 'Mueble e Instalación', desc: 'Diseño, fabricación e instalación profesional', icon: '🛠️', color: 'neon-green' },
            ].map((service, i) => (
              <div key={i} className="p-6 border-2 border-gray-700 rounded-lg hover:border-neon-red transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={service.color === 'neon-red' ? 'neon-text-red' : service.color === 'neon-yellow' ? 'neon-text-yellow' : 'neon-text-green'}>
                  {service.title}
                </h3>
                <p className="text-sm mt-2 text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/servicios" className="inline-block px-8 py-3 bg-neon-yellow text-black font-bold rounded hover:bg-neon-red transition">
              Conocer Más
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 neon-text-green">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos y descubre cómo podemos llevar tu idea al siguiente nivel.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-neon-red text-black font-bold text-lg rounded hover:bg-neon-yellow transition">
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}