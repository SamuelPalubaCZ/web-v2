# ThinkHome Web v2

Moderní webová aplikace pro ThinkHome s ThinkPad barevným schématem a morphism designem.

## Funkce

- 🎨 **ThinkPad barevné schéma** - Elegantní černé, šedé a stříbrné barvy inspirované ThinkPad notebooky
- ✨ **Morphism design** - Skleněné efekty a moderní UI s backdrop blur
- 📱 **Responzivní design** - Optimalizováno pro všechna zařízení
- 🌙 **Dark/Light mode** - Automatické přepínání témat
- ⚡ **Next.js 15** - Nejnovější verze s Turbopack
- 🎯 **TypeScript** - Plná type safety
- 🎭 **Framer Motion** - Plynulé animace
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔧 **@tabler/icons-react** - Moderní ikony

## Stránky

- **Domů** - Hlavní stránka s hero sekcí a misí
- **Služby** - Detailní přehled všech IT služeb
- **Tým** - Seznam členů týmu s kontakty
- **Kontakt** - Kontaktní informace s možností kopírování

## Instalace

1. Nainstalujte závislosti:
```bash
npm install
```

2. Spusťte vývojový server:
```bash
npm run dev
```

3. Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči

## Build pro produkci

```bash
npm run build
npm start
```

## Struktura projektu

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Globální styly
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Hlavní stránka
│   ├── services/       # Stránka služeb
│   ├── team/           # Stránka týmu
│   └── contact/        # Kontaktní stránka
├── components/         # React komponenty
│   ├── layout/         # Layout komponenty
│   └── sections/       # Sekce stránek
└── public/            # Statické soubory
    ├── logo/          # Loga
    └── team/          # Týmové fotky
```

## Technologie

- **Next.js 15** - React framework
- **React 19** - UI knihovna
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animace
- **@tabler/icons-react** - Ikony
- **next-themes** - Theme management

## Design System

### Barvy
- **ThinkPad Black**: `#1a1a1a`
- **ThinkPad Dark**: `#2d2d2d`
- **ThinkPad Gray**: `#4a4a4a`
- **ThinkPad Light**: `#6b6b6b`
- **ThinkPad Silver**: `#a8a8a8`

### Morphism efekty
- Skleněné pozadí s backdrop blur
- Jemné stíny a ohraničení
- Plynulé přechody a animace

## Vývoj

Pro vývoj doporučujeme používat VS Code s rozšířeními:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
