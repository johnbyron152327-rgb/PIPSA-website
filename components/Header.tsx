'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-black border-b border-neon-red sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="PIPSA Logo" className="h-10 w-10" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <span className="neon-text-yellow font-bold text-xl">PIPSA</span>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:neon-text-red transition">Hogar</Link>
          <Link href="/servicios" className="hover:neon-text-red transition">Servicios</Link>
          <Link href="/proyectos" className="hover:neon-text-red transition">Proyectos</Link>
          <Link href="/about" className="hover:neon-text-red transition">Sobre Nosotros</Link>
          <Link href="/contacto" className="hover:neon-text-red transition">Contacto</Link>
        </div>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 h-1 bg-neon-yellow"></div>
          <div className="w-6 h-1 bg-neon-yellow"></div>
          <div className="w-6 h-1 bg-neon-yellow"></div>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-neon-red p-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Hogar</Link>
          <Link href="/servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
          <Link href="/proyectos" onClick={() => setMobileMenuOpen(false)}>Proyectos</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>Sobre Nosotros</Link>
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  )
}