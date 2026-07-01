'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ seccion: string }>
}

export default function SeccionProyectos({ params }: PageProps) {
  const [seccion, setSeccion] = useState<string>('')
  const [fotos, setFotos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getParams = async () => {
      const { seccion } = await params
      setSeccion(seccion)
      try {
        const response = await fetch(`/api/fotos/${seccion}`)
        if (response.ok) {
          const data = await response.json()
          setFotos(data.fotos || [])
        }
      } catch (e) {
        console.error('Error fetching fotos:', e)
      } finally {
        setLoading(false)
      }
    }
    getParams()
  }, [params])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-400">Cargando galería...</p></div>

  if (fotos.length === 0) {
    return (
      <div className="min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/proyectos" className="neon-text-red hover:neon-text-yellow mb-8 block">
            ← Volver a Proyectos
          </Link>
          <div className="text-center py-16">
            <p className="text-gray-400 mb-4">No hay fotos en esta sección aún.</p>
            <p className="text-sm text-gray-500">
              Añade imágenes a <code className="bg-gray-900 px-2 py-1 rounded">public/photos/{seccion}/</code>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/proyectos" className="neon-text-red hover:neon-text-yellow mb-8 inline-block">
          ← Volver a Proyectos
        </Link>
        <h1 className="text-5xl font-bold mb-8 text-center neon-text-yellow capitalize">
          {seccion.replace(/-/g, ' ')}
        </h1>
        <div className="rounded-lg overflow-hidden border-2 border-neon-red mb-8">
          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className="w-full aspect-video bg-gray-900">
            {fotos.map((foto, i) => (
              <SwiperSlide key={i}>
                <img src={foto} alt={`${seccion} ${i + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotos.map((foto, i) => (
            <div key={i} className="aspect-square rounded overflow-hidden border border-gray-700 hover:border-neon-red transition">
              <img src={foto} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">¿Te interesa este servicio?</p>
          <Link href="/contacto" className="inline-block px-8 py-3 bg-neon-red text-black font-bold rounded hover:bg-neon-yellow transition">
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </div>
  )
}