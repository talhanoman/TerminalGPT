#!/bin/bash

# TerminalGPT Build Script
# This script helps you build TerminalGPT for your platform

set -e

echo "🧠💬 TerminalGPT Build Script"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Detect platform
PLATFORM=$(uname -s)
case "$PLATFORM" in
    Darwin*)
        echo "🍎 Detected macOS"
        echo "🔨 Building for macOS..."
        npm run make:mac
        ;;
    Linux*)
        echo "🐧 Detected Linux"
        echo "🔨 Building for Linux..."
        npm run make:linux
        ;;
    MINGW*|MSYS*|CYGWIN*)
        echo "🪟 Detected Windows"
        echo "🔨 Building for Windows..."
        npm run make:win
        ;;
    *)
        echo "❓ Unknown platform: $PLATFORM"
        echo "🔨 Building for all platforms..."
        npm run build
        ;;
esac

echo ""
echo "🎉 Build completed successfully!"
echo "📁 Check the 'out/' directory for your distributable files."
echo ""
echo "📦 Available files:"
ls -la out/ 2>/dev/null || echo "   No output files found in 'out/' directory" 