'use client'

import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', direccion: '', correo: '', celular: '', comentario: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validatePhone = (phone: string) => /^\d{4}-\d{4}$/.test(phone)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    if (!validatePhone(formData.celular)) {
      setMessageType('error')
      setMessage('El celular debe tener formato XXXX-XXXX')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setMessageType('success')
        setMessage('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
        setFormData({ nombre: '', direccion: '', correo: '', celular: '', comentario: '' })
      } else {
        setMessageType('error')
        setMessage(data.message || 'Error al enviar el mensaje.')
      }
    } catch (error) {
      setMessageType('error')
      setMessage('Error de conexión.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center neon-text-yellow">Contacto</h1>
        <p className="text-center text-gray-400 mb-12">Cuéntanos sobre tu proyecto y nos pondremos en contacto a la brevedad.</p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-700">
          <div>
            <label className="block text-dark-text mb-2">Nombre *</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-dark-text mb-2">Dirección *</label>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition" placeholder="Tu dirección" />
          </div>
          <div>
            <label className="block text-dark-text mb-2">Correo *</label>
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition" placeholder="tu@correo.com" />
          </div>
          <div>
            <label className="block text-dark-text mb-2">Celular (XXXX-XXXX) *</label>
            <input type="text" name="celular" value={formData.celular} onChange={handleChange} required className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition" placeholder="3012-3456" />
            <p className="text-xs text-gray-500 mt-1">Formato: 4 dígitos, guion, 4 dígitos</p>
          </div>
          <div>
            <label className="block text-dark-text mb-2">Comentario *</label>
            <textarea name="comentario" value={formData.comentario} onChange={handleChange} required rows={6} className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:border-neon-red focus:outline-none transition resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
          </div>
          {message && (
            <div className={`p-4 rounded border-l-4 ${messageType === 'success' ? 'bg-green-900 border-neon-green text-neon-green' : 'bg-red-900 border-neon-red text-neon-red'}`}>
              {message}
            </div>
          )}
          <button type="submit" disabled={loading} className="w-full py-3 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="neon-text-yellow font-bold">Email</h3>
            <p className="text-gray-400 text-sm mt-1">johnbyron152327@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="neon-text-yellow font-bold">Celular</h3>
            <p className="text-gray-400 text-sm mt-1">+57 XXX-XXXX</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="neon-text-yellow font-bold">Ubicación</h3>
            <p className="text-gray-400 text-sm mt-1">Colombia</p>
          </div>
        </div>
      </div>
    </div>
  )
}