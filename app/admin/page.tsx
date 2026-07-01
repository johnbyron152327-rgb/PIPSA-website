'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Admin() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ user: '', pass: '' })
  const [loginError, setLoginError] = useState('')

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER || 'admin'
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS || '123456'
    if (credentials.user === adminUser && credentials.pass === adminPass) {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
    } else {
      setLoginError('Usuario o contraseña incorrectos')
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') setIsAuthenticated(true)
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="max-w-md w-full bg-gray-900 border border-gray-700 rounded-lg p-8">
          <h1 className="text-3xl font-bold neon-text-yellow text-center mb-8">Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-dark-text mb-2">Usuario</label>
              <input type="text" name="user" value={credentials.user} onChange={handleLoginChange} className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition" placeholder="admin" />
            </div>
            <div>
              <label className="block text-dark-text mb-2">Contraseña</label>
              <input type="password" name="pass" value={credentials.pass} onChange={handleLoginChange} className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition" placeholder="••••••" />
            </div>
            {loginError && <div className="p-3 bg-red-900 border border-neon-red text-neon-red rounded text-sm">{loginError}</div>}
            <button type="submit" className="w-full py-2 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin')
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold neon-text-yellow">Panel de Administración</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition">
            Cerrar Sesión
          </button>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold neon-text-green mb-6">Instrucciones</h2>
          <ol className="space-y-3 text-gray-300 text-sm">
            <li><strong>1.</strong> Copia tus carpetas de fotos a <code className="bg-black px-2 py-1 rounded">public/photos/</code></li>
            <li><strong>2.</strong> Cada subcarpeta será una sección (ej: fachada, letreros, instalaciones)</li>
            <li><strong>3.</strong> Haz commit y push a tu repositorio</li>
            <li><strong>4.</strong> Vercel redesplegará automáticamente con las nuevas imágenes</li>
          </ol>
        </div>
      </div>
    </div>
  )
}