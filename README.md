
# PRINTUPACK Website (estático para cPanel)

## Dónde subir tus archivos
- Video del hero: `assets/banner/hero-1.mp4`
- Poster/foto del hero: `assets/img/banner-1.jpg`
- Logos para la cinta: `assets/img/logos/regla.png` (una imagen horizontal con varios logos repetidos)
- Fotos de galerías:
  - Exhibición: `assets/img/gallery/exhibicion/*`
  - P.O.P.: `assets/img/gallery/pop/*`
  - Empaques: `assets/img/gallery/empaques/*`
  - Granformato: `assets/img/gallery/granformato/*`

Actualiza los JSON en `/content/*.json` para controlar textos y rutas de las imágenes.

## Noticias con paginado
Edita `content/news.json`. Al superar 10 elementos, se paginan automáticamente.

## Colores/Tipografía
- Tipografía Montserrat desde Google Fonts en todo el sitio.
- Paleta azul/blanco (variables en `assets/css/site.css`).

## Menú transparente/scroll
- Al cargar el home, el menú es transparente sobre el video y muestra borde sutil.
- Al hacer scroll, el menú se vuelve blanco con sombra (ver `assets/js/main.js`).

## WhatsApp e Instagram
- Botón flotante a WhatsApp (+57 310 878 0384).
- Enlaces a Instagram oficial.

## Mapa interactivo
- Iframes de Google Maps para: "Calle 8 #26-36" y "Carrera 100 #24d-66".

---

## Despliegue en cPanel
Sube toda la carpeta `PRINTUPACK/` al public_html o al subdirectorio que uses.

## Git (primer push al repo existente)
Clona y sube:
1) `git clone https://github.com/GhostS231002/PrintuPack.git`
2) Copia el contenido de `PRINTUPACK/` dentro de la carpeta del repo clonado.
3) Ejecuta:
```
git add .
git commit -m "Versión inicial del sitio estático (HTML/CSS/JS)"
git branch -M main
git push -u origin main
```
> Nota: No puedo hacer push por ti desde aquí, pero estos son los comandos exactos para ejecutarlo en tu equipo.
# PrintuPack