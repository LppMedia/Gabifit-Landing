# GabiFit: Migración Next.js → GitHub → Vercel + Dominio

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el setup HTML/Vite del root por la app Next.js que ya existe en `nextjs-ready/`, hacer push a GitHub y deployar en Vercel con el dominio `gabifitrd.com`.

**Architecture:** La carpeta `nextjs-ready/` contiene una app Next.js 15 completamente funcional. La movemos al root del repo (reemplazando los archivos Vite/HTML viejos), hacemos push a GitHub y Vercel detecta Next.js automáticamente.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3, Vercel, GitHub (LppMedia/Gabifit-Landing)

---

## Mapa de archivos

### Archivos a ELIMINAR del root (setup viejo):
- `package.json` (Vite config)
- `package-lock.json` (Vite)
- `node_modules/` (Vite)
- `vercel.json` (config estática, Next.js no la necesita)
- `index.html` (landing HTML)
- `index.legacy.html` (backup HTML)
- `src/` (carpeta Vite)
- `components/` (componentes HTML/Vite)
- `lib/` (utils Vite)

### Archivos a MOVER de `nextjs-ready/` al root:
- `package.json` → `./package.json`
- `package-lock.json` → `./package-lock.json`
- `next.config.mjs` → `./next.config.mjs`
- `next-env.d.ts` → `./next-env.d.ts`
- `tsconfig.json` → `./tsconfig.json`
- `tailwind.config.js` → `./tailwind.config.js`
- `postcss.config.js` → `./postcss.config.js`
- `app/` → `./app/`
- `public/` → `./public/`

### Archivos a CONSERVAR en root (no tocar):
- `.git/` (historia git)
- `assets/`, `asset/`, `Brand identitiy/`, `evento/`, `_agents/` (assets varios)
- `COPY_LANDING_GABIFIT.md` (documentación)
- `Child_walking_toward_202603252024.mp4` (video original)
- `.claude/` (configuración Claude)
- `.gitattributes`
- `docs/` (este plan)

---

## Task 1: Limpiar archivos viejos del root

**Files:**
- Delete: `package.json`, `package-lock.json`, `vercel.json`, `index.html`, `index.legacy.html`
- Delete dirs: `node_modules/`, `src/`, `components/`, `lib/`

- [ ] **Step 1: Eliminar archivos viejos**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
rm -f package.json package-lock.json vercel.json index.html index.legacy.html
rm -rf node_modules src components lib
```

- [ ] **Step 2: Verificar que se eliminaron**

```bash
ls "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
```

Expected: NO ver `package.json`, `index.html`, `node_modules`, `src`, `components`, `lib`

---

## Task 2: Mover el proyecto Next.js al root

**Files:**
- Move: todo el contenido de `nextjs-ready/` → root `./`

- [ ] **Step 1: Copiar archivos de configuración al root**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
cp nextjs-ready/package.json ./package.json
cp nextjs-ready/package-lock.json ./package-lock.json
cp nextjs-ready/next.config.mjs ./next.config.mjs
cp nextjs-ready/next-env.d.ts ./next-env.d.ts
cp nextjs-ready/tsconfig.json ./tsconfig.json
cp nextjs-ready/tailwind.config.js ./tailwind.config.js
cp nextjs-ready/postcss.config.js ./postcss.config.js
```

- [ ] **Step 2: Mover carpetas `app/` y `public/` al root**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
cp -r nextjs-ready/app ./app
cp -r nextjs-ready/public ./public
```

- [ ] **Step 3: Verificar estructura**

```bash
ls "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
```

Expected: ver `app/`, `public/`, `package.json`, `next.config.mjs`, `tailwind.config.js`, `tsconfig.json`

- [ ] **Step 4: Verificar contenido de app/**

```bash
ls "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI/app"
```

Expected: `components/`, `evento/`, `globals.css`, `layout.tsx`, `page.tsx`

---

## Task 3: Instalar dependencias y verificar build

**Files:**
- Modify: `./package.json` (ya copiado, no requiere cambios)

- [ ] **Step 1: Instalar dependencias**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
npm install
```

Expected: `node_modules/` creado con Next.js, React 19, TypeScript, Tailwind

- [ ] **Step 2: Correr build de producción**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
npm run build
```

Expected: `✓ Compiled successfully` y `.next/` creado

Si hay errores de TypeScript: leer el error exacto, corregir el archivo indicado y re-ejecutar.

- [ ] **Step 3: Verificar en dev server (opcional pero recomendado)**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
npm run dev
```

Abrir `http://localhost:3000` en el browser y verificar:
- Landing principal carga correctamente
- La barra de marquee se anima
- El slider de testimonios funciona
- El acordeón FAQ funciona
- `/evento` carga el Mommy Garden Brunch
- El video del coach se reproduce en loop

Presionar `Ctrl+C` para detener el server.

---

## Task 4: Limpiar `nextjs-ready/` y crear `.gitignore`

**Files:**
- Delete: `nextjs-ready/` (ya copiado al root, no se necesita más)
- Create/Modify: `.gitignore`

- [ ] **Step 1: Eliminar `nextjs-ready/`**

```bash
rm -rf "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI/nextjs-ready"
```

- [ ] **Step 2: Crear `.gitignore` apropiado para Next.js**

Crear el archivo `/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI/.gitignore` con este contenido exacto:

```
# dependencies
node_modules/

# Next.js build output
.next/
out/

# production
build/

# env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# OS
.DS_Store
Thumbs.db

# Large media files — no subir al repo
*.mp4
*.mov
```

**NOTA IMPORTANTE sobre los videos:** Los videos pesados (`elaine-zapata.mp4`, `coach-video.mp4`) no se deben subir a Git. En producción deben estar en Cloudinary o un CDN. Ver Task 5 para el plan de videos.

- [ ] **Step 3: Verificar `.gitignore`**

```bash
cat "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI/.gitignore"
```

---

## Task 5: Manejo de videos (CDN vs local)

**Context:** Los videos (`public/coach-video.mp4`, `public/testimonios/elaine-zapata.mp4`) son pesados para subir a Git/Vercel. Hay dos opciones:

**Opción A (Recomendada): Subir a Cloudinary y usar URLs**
- El logo y otros assets ya están en Cloudinary (`res.cloudinary.com/dmkx2uowd`)
- Subir los videos a Cloudinary y reemplazar `src="/coach-video.mp4"` con la URL de Cloudinary

**Opción B (Rápido): Subir los videos directo con Git LFS o dejar en public/**
- Vercel soporta hasta 100MB por archivo en `public/`
- Riesgo: si los videos son >100MB, Vercel los rechaza

- [ ] **Step 1: Verificar el tamaño de los videos**

```bash
du -sh "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI/public/coach-video.mp4" 2>/dev/null || echo "no existe aun"
du -sh "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI/public/testimonios/elaine-zapata.mp4" 2>/dev/null || echo "no existe"
```

- [ ] **Step 2a: Si los videos son <50MB → quitar `*.mp4` del `.gitignore` y dejarlos en public/**

Editar `.gitignore` y eliminar la línea `*.mp4`:
- Usar el Editor para remover `*.mp4` y `*.mov` de `.gitignore`

- [ ] **Step 2b: Si los videos son >50MB → subir a Cloudinary**

1. Ir a cloudinary.com → Upload → subir los videos
2. Copiar las URLs de video generadas (formato: `https://res.cloudinary.com/dmkx2uowd/video/upload/...`)
3. En `app/page.tsx` línea 394, cambiar:
   ```tsx
   <source src="/coach-video.mp4" type="video/mp4" />
   ```
   por:
   ```tsx
   <source src="https://res.cloudinary.com/dmkx2uowd/video/upload/q_auto/YOUR_VIDEO_ID.mp4" type="video/mp4" />
   ```
4. En `app/page.tsx` línea 458, cambiar:
   ```tsx
   <source src="/testimonios/elaine-zapata.mp4" type="video/mp4" />
   ```
   por la URL de Cloudinary del testimonio de Elaine

---

## Task 6: Commit y Push a GitHub

**Files:** Todo el repo

- [ ] **Step 1: Verificar el estado de git**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
git status
```

- [ ] **Step 2: Verificar que el remote de GitHub está configurado**

```bash
git remote -v
```

Expected: ver `https://github.com/LppMedia/Gabifit-Landing.git` como origin

Si no está configurado:
```bash
git remote add origin https://github.com/LppMedia/Gabifit-Landing.git
```

- [ ] **Step 3: Agregar todos los archivos al staging**

```bash
cd "/c/Users/Tu papi/Desktop/Ai Builts/Gabifit Proyect/Landing-GABI"
git add app/ public/ package.json package-lock.json next.config.mjs tsconfig.json tailwind.config.js postcss.config.js .gitignore docs/
git add -u  # registra los archivos eliminados
```

- [ ] **Step 4: Crear el commit**

```bash
git commit -m "$(cat <<'EOF'
Migrate landing to Next.js 15 with full app router setup

Replaces HTML/Vite setup with production-ready Next.js 15 app.
Includes main landing, /evento (Mommy Garden Brunch), all components,
Tailwind brand config, and Google Fonts (Oswald, Roboto Mono, Space Grotesk).

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 5: Push a GitHub**

```bash
git push origin main
```

Si el push es rechazado por historia divergente:
```bash
git pull origin main --rebase
git push origin main
```

- [ ] **Step 6: Verificar en GitHub**

Abrir `https://github.com/LppMedia/Gabifit-Landing` y confirmar que se ven los nuevos archivos (`app/`, `package.json` con Next.js, etc.)

---

## Task 7: Deploy en Vercel + Dominio gabifitrd.com

**NOTA:** Este task requiere acciones manuales en la UI de Vercel. Sigue los pasos exactos.

- [ ] **Step 1: Ir a vercel.com e importar el repo**

1. Login en `vercel.com`
2. Click **"Add New → Project"**
3. Buscar y seleccionar `LppMedia/Gabifit-Landing`
4. En la configuración del proyecto:
   - **Framework Preset**: Next.js (se detecta automáticamente)
   - **Root Directory**: `.` (dejar en la raíz — no cambiar a nextjs-ready/)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Click **"Deploy"**

- [ ] **Step 2: Esperar que el deploy termine**

Vercel mostrará los logs de build. El proceso típico toma 1-3 minutos.
Expected: `✓ Build Completed` y una URL preview como `gabifit-landing.vercel.app`

- [ ] **Step 3: Verificar la URL de preview**

Abrir la URL que Vercel asignó y verificar que la landing carga correctamente:
- Hero con headline "DEJA DE LUCHAR CON TU CUERPO POST-PARTO"
- Barra de marquee verde animada
- Video del coach
- Testimonios slider funcional
- FAQ accordion funcional
- `/evento` carga el Mommy Garden Brunch

- [ ] **Step 4: Configurar el dominio `gabifitrd.com`**

En el dashboard de Vercel del proyecto:
1. Click en **"Settings" → "Domains"**
2. Escribir `gabifitrd.com` → click **"Add"**
3. También agregar `www.gabifitrd.com` → click **"Add"**
4. Vercel mostrará los registros DNS necesarios

- [ ] **Step 5: Configurar DNS en tu registrador de dominio**

Vercel mostrará algo así (los valores exactos los da Vercel):
```
Tipo A     @      76.76.21.21
Tipo CNAME www    cname.vercel-dns.com
```

Ir al panel donde compraste el dominio `gabifitrd.com` (GoDaddy, Namecheap, Porkbun, etc.) y agregar esos registros DNS.

- [ ] **Step 6: Verificar propagación del dominio**

La propagación DNS puede tomar entre 5 minutos y 24 horas.
En Vercel, el dominio mostrará `✓ Valid Configuration` cuando esté activo.
Verificar abriendo `https://gabifitrd.com` en el browser.

---

## Checklist final de SEO (post-deploy)

Una vez que el sitio esté en vivo, estos son los puntos SEO que Next.js ya resuelve automáticamente vs. el HTML:

- [ ] **SSR/SSG activado**: Next.js genera HTML en el servidor — Google indexa el contenido real, no JavaScript vacío
- [ ] **Open Graph metatags**: Agregar en `app/layout.tsx` los tags de OG para redes sociales:
  ```tsx
  export const metadata: Metadata = {
    title: "Gabifit | Recuperación Post-Parto Real",
    description: "El programa de 8 semanas...",
    openGraph: {
      title: "Gabifit | Recuperación Post-Parto Real",
      description: "El programa de 8 semanas...",
      url: "https://gabifitrd.com",
      siteName: "Gabifit",
      locale: "es_DO",
      type: "website",
    },
  };
  ```
- [ ] **Sitemap**: Crear `app/sitemap.ts` para que Google indexe las rutas
- [ ] **Google Search Console**: Registrar `gabifitrd.com` en Search Console y enviar el sitemap

---

## Notas importantes

1. **El link de compra** en `page.tsx` línea 368 tiene `href="#"` — antes de lanzar hay que reemplazarlo con el link real de pago (ThriveCart, Hotmart, Stripe, etc.)

2. **La frase de Elaine Zapata** en `page.tsx` línea 466 tiene un TODO: agregar la cita real de Elaine cuando la tengas

3. **El video embed de YouTube** en `page.tsx` línea 136 apunta a un placeholder `dQw4w9WgXcQ` — reemplazar con el ID del VSL real de Gabi

4. **El dominio del repo en package.json** está configurado como `gabifit-landing` — solo estético, no afecta el deploy
