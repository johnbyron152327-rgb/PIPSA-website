import { readdirSync } from 'fs'
import { join, extname } from 'path'
import { NextRequest, NextResponse } from 'next/server'

const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ seccion: string }> }
) {
  try {
    const { seccion } = await params
    const photosDir = join(process.cwd(), 'public', 'photos', seccion)
    const files = readdirSync(photosDir).filter(file => {
      const ext = extname(file).toLowerCase()
      return VALID_EXTENSIONS.includes(ext)
    })
    const fotos = files.map(file => `/photos/${seccion}/${file}`)
    return NextResponse.json({ fotos }, { status: 200 })
  } catch (error) {
    console.error('Error reading photos:', error)
    return NextResponse.json({ fotos: [], error: 'No se encontraron fotos' }, { status: 404 })
  }
}