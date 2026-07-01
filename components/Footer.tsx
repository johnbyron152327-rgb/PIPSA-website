'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-red mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="neon-text-yellow font-bold mb-4">PIPSA</h3>
            <p className="text-sm">Impresión digital gran formato, letreros fascia y mueble.</p>
          </div>
          <div>
            <h4 className="neon-text-yellow font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:neon-text-red">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:neon-text-red">Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:neon-text-red">Proyectos</Link></li>
              <li><Link href="/contacto" className="hover:neon-text-red">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="neon-text-yellow font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 <a href="mailto:johnbyron152327@gmail.com" className="hover:neon-text-red">johnbyron152327@gmail.com</a></li>
              <li>📱 +57 XXX-XXXX</li>
              <li>📍 Colombia</li>
              <li>📷 <a href="https://instagram.com" target="_blank" className="hover:neon-text-red">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neon-green pt-4 text-center text-sm text-gray-500">
          <p>&copy; 2024 PIPSA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}