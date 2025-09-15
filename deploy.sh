#!/bin/bash

# ThinkHome Web v2 - Deployment Script
echo "🚀 ThinkHome Web v2 - Deployment Script"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod
elif command -v netlify &> /dev/null; then
    echo "🌐 Deploying to Netlify..."
    netlify deploy --prod --dir=.next
else
    echo "📋 Manual deployment options:"
    echo "1. Vercel: https://vercel.com/new"
    echo "2. Netlify: https://app.netlify.com/start"
    echo "3. Docker: docker build -t thinkhome-web-v2 . && docker run -p 3000:3000 thinkhome-web-v2"
    echo ""
    echo "Or install Vercel CLI: npm i -g vercel"
    echo "Or install Netlify CLI: npm i -g netlify-cli"
fi

echo "🎉 Deployment process completed!"
