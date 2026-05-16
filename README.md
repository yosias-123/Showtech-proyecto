# Show Tech Solutions — Sitio Web v1.0
> **Avance 1/3** · Páginas completadas: Inicio + Nosotros
> Pendientes: Servicios · Contacto

---

## 📁 Estructura del proyecto

```
showtech/
│
├── index.html              ← Página principal (Inicio + Nosotros)
│
├── css/
│   ├── variables.css       ← Tokens de diseño (colores, fuentes, espaciado)
│   ├── base.css            ← Reset, tipografía, utilidades, botones
│   ├── layout.css          ← Navbar, Footer, WhatsApp flotante
│   └── home.css            ← Estilos de todas las secciones de index.html
│
├── js/
│   └── main.js             ← Módulos JS reutilizables
│
├── pages/                  ← (próximas páginas)
│   ├── servicios.html      ← TODO: Página de Servicios
│   └── contacto.html       ← TODO: Página de Contacto
│
└── assets/                 ← Imágenes, videos, íconos
    ├── images/
    ├── videos/
    └── icons/
```

---

## 🎨 Paleta de diseño

| Token             | Valor       | Uso                        |
|-------------------|-------------|----------------------------|
| `--gold`          | `#C9A84C`   | Color primario / acentos   |
| `--gold-light`    | `#E8C97A`   | Hover de botones dorados   |
| `--bg-base`       | `#080808`   | Fondo principal            |
| `--bg-soft`       | `#101010`   | Secciones alternas         |
| `--text-white`    | `#F8F4EE`   | Texto principal            |
| `--text-gray`     | `#A8A49C`   | Texto secundario           |

---

## ⚙️ Módulos JS disponibles (`main.js`)

| Función           | Descripción                                        |
|-------------------|----------------------------------------------------|
| `initReveal()`    | Animación scroll reveal en elementos `.reveal`     |
| `initNavbar()`    | Efecto blur al hacer scroll + enlace activo        |
| `initHamburger()` | Menú móvil con animación de ícono                  |
| `initCounters()`  | Animación de contadores numéricos en el hero       |
| `initForm()`      | Feedback visual al enviar el formulario            |

---

## 📄 Secciones implementadas

### index.html
- [x] Navbar fijo con blur + menú móvil
- [x] Hero con estadísticas animadas
- [x] Nosotros (texto + video placeholder + valores)
- [x] Misión y Visión
- [x] Cómo Trabajamos (3 pasos)
- [x] Todo Tipo de Eventos (cards hover)
- [x] Servicios (layout sticky)
- [x] Sobre Nosotros (grid imagen + contenido)
- [x] Testimonios (3 cards)
- [x] Contacto (info + formulario)
- [x] Footer completo
- [x] WhatsApp flotante

---

## 🚀 Para agregar las siguientes páginas

1. Crear `pages/servicios.html`
2. Crear `pages/contacto.html`
3. Usar los mismos CSS: `variables.css`, `base.css`, `layout.css`
4. Crear CSS específico: `css/servicios.css`, `css/contacto.css`
5. El mismo `js/main.js` funciona en todas las páginas sin cambios

---

## 🌐 Cómo abrir el proyecto

Abrir `index.html` directamente en el navegador, o usar un servidor local:
```bash
# Con Python
python -m http.server 8080

# Con Node.js (npx)
npx serve .
```

---

*Diseñado para Show Tech Solutions · Lima, Perú*
