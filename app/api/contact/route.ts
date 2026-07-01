import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

function validatePhone(phone: string): boolean {
  const regex = /^\d{4}-\d{4}$/
  return regex.test(phone)
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, direccion, correo, celular, comentario } = body

    if (!nombre || !direccion || !correo || !celular || !comentario) {
      return NextResponse.json({ message: 'Todos los campos son requeridos' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correo)) {
      return NextResponse.json({ message: 'El correo no es válido' }, { status: 400 })
    }

    if (!validatePhone(celular)) {
      return NextResponse.json({ message: 'El celular debe tener formato XXXX-XXXX' }, { status: 400 })
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO || 'johnbyron152327@gmail.com',
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `<h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Correo:</strong> <a href="mailto:${correo}">${correo}</a></p>
        <p><strong>Celular:</strong> ${celular}</p>
        <h3>Mensaje:</h3>
        <p>${comentario.replace(/\n/g, '<br>')}</p>`,
      replyTo: correo,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Mensaje enviado exitosamente' }, { status: 200 })
  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json({ message: 'Error al enviar el mensaje.' }, { status: 500 })
  }
}