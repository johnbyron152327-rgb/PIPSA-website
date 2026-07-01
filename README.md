# PIPSA - Impresión Digital Gran Formato

Sitio web multipágina dinámico para PIPSA.

## 🚀 Instalación Rápida

### 1. Clona el repositorio
```bash
git clone https://github.com/johnbyron152327-rgb/PIPSA-website.git
cd PIPSA-website
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Configura .env.local
Copia `.env.example` a `.env.local` y edita con tus datos:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-correo@gmail.com
SMTP_PASS=tu-app-password
EMAIL_FROM=tu-correo@gmail.com
EMAIL_TO=johnbyron152327@gmail.com
ADMIN_USER=admin
ADMIN_PASS=123456
NEXTAUTH_SECRET=algo
```

### 4. Organiza tus fotos
```
public/
└── photos/
    ├── fachada/
    ├── letreros/
    └── instalaciones/
```

### 5. Inicia el servidor
```bash
npm run dev
```

Abre http://localhost:3000

## 📁 Stack
- Next.js 14 + TypeScript
- Tailwind CSS
- Swiper (carrusel)
- Nodemailer (SMTP)

## 📚 Páginas
- / (Hogar)
- /servicios
- /proyectos
- /proyectos/[seccion]
- /contacto
- /about
- /admin (usuario: admin, contraseña: 123456)

## 🌐 Deploy en Vercel
1. Sube a GitHub
2. Conecta en https://vercel.com
3. Configura variables de entorno
4. Deploy

---

**Contacto:** johnbyron152327@gmail.com