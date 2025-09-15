# Nasazení ThinkHome Web v2

Tento dokument obsahuje instrukce pro nasazení aplikace na různé hosting platformy.

## 🚀 Rychlé nasazení

### Vercel (Doporučeno)

1. **Připojte GitHub repository k Vercel:**
   - Jděte na [vercel.com](https://vercel.com)
   - Přihlaste se a klikněte "New Project"
   - Importujte váš GitHub repository
   - Vercel automaticky detekuje Next.js a nakonfiguruje build

2. **Automatické nasazení:**
   - Každý push do `main` branch automaticky nasadí novou verzi
   - Preview deployments pro pull requesty

### Netlify

1. **Připojte repository:**
   - Jděte na [netlify.com](https://netlify.com)
   - Klikněte "New site from Git"
   - Připojte váš GitHub repository

2. **Build nastavení:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

### Docker

1. **Sestavte Docker image:**
```bash
docker build -t thinkhome-web-v2 .
```

2. **Spusťte kontejner:**
```bash
docker run -p 3000:3000 thinkhome-web-v2
```

### Vlastní server

1. **Instalace závislostí:**
```bash
npm install
```

2. **Build aplikace:**
```bash
npm run build
```

3. **Spuštění:**
```bash
npm start
```

## 🔧 Environment Variables

Pro produkční nasazení můžete nastavit tyto proměnné:

- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

## 📊 Monitoring

### Vercel Analytics
- Automaticky dostupné na Vercel
- Real-time metriky výkonu
- Error tracking

### Custom Analytics
Můžete přidat Google Analytics nebo jiné nástroje do `src/app/layout.tsx`.

## 🔄 CI/CD

GitHub Actions workflow je připraven pro automatické nasazení:
- Build a test při každém push
- Automatické nasazení na Vercel
- Preview deployments pro pull requesty

## 🌐 Custom Domain

### Vercel
1. Jděte do Project Settings
2. Klikněte na "Domains"
3. Přidejte váš custom domain
4. Nakonfigurujte DNS záznamy

### Netlify
1. Jděte do Site Settings
2. Klikněte na "Domain Management"
3. Přidejte custom domain
4. Nakonfigurujte DNS

## 🚨 Troubleshooting

### Build Errors
- Zkontrolujte Node.js verzi (doporučeno 18+)
- Spusťte `npm run build` lokálně
- Zkontrolujte logy v hosting platformě

### Performance Issues
- Zkontrolujte bundle size: `npm run build`
- Použijte Vercel Analytics pro monitoring
- Optimalizujte obrázky pomocí Next.js Image komponenty

### Environment Issues
- Zkontrolujte environment variables
- Ujistěte se, že všechny závislosti jsou v `package.json`

## 📝 Poznámky

- Aplikace je optimalizována pro statické nasazení
- Všechny stránky jsou pre-rendered
- Podporuje ISR (Incremental Static Regeneration)
- Automatické HTTPS na všech platformách
