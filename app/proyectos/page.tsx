import Link from 'next/link'
import { readdirSync } from 'fs'
import { join } from 'path'

export default function Proyectos() {
  let secciones: string[] = []
  
  try {
    const photosDir = join(process.cwd(), 'public', 'photos')
    secciones = readdirSync(photosDir).filter(f => !f.startsWith('.'))
  } catch (e) {
    console.log('Nota: copia tus carpetas a public/photos/')
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center neon-text-yellow">Nuestros Proyectos</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explora nuestro portafolio de trabajos realizados. Cada sección contiene proyectos completados con éxito.
        </p>

        {secciones.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-4">No hay secciones de proyectos aún.</p>
            <p className="text-sm text-gray-500">
              Copia tus carpetas de fotos a <code className="bg-gray-900 px-2 py-1 rounded">public/photos/</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secciones.map((seccion) => (
              <Link key={seccion} href={`/proyectos/${seccion}`} className="group relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-neon-red transition">
                <div className="aspect-square bg-gradient-to-br from-neon-red to-neon-yellow opacity-20 group-hover:opacity-40 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <h3 className="text-2xl font-bold neon-text-yellow capitalize group-hover:neon-text-red transition">
                      {seccion.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">Ver galería →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}