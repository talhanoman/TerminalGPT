# 🧠💬 TerminalGPT — A Terminal-Themed ChatGPT Desktop App

> A sleek, minimalistic desktop wrapper for ChatGPT built with Electron — styled like your favorite hacker terminal.

---

## 🚀 Overview

**TerminalGPT** is a cross-platform desktop app that brings the power of ChatGPT to your fingertips — wrapped in a retro, terminal-style interface. Designed for devs, geeks, and terminal lovers, this app enhances your productivity by combining ChatGPT's intelligence with an aesthetic you feel at home in.

Behind the scenes, it's still the powerful ChatGPT — just cooler.

---

## 🎯 Features

- 🖥️ **Electron-powered desktop app** — works on macOS, Windows, and Linux  
- 🧠 **ChatGPT integration** — access ChatGPT's capabilities directly in-app  
- 💻 **Terminal-style UI** — dark theme, monospaced font, blinking cursor, and retro vibe  
- 🎨 **Custom CSS overrides** — enhanced UI layered on top of ChatGPT's core structure  
- ⚡ **Fast & lightweight** — minimal distractions, maximum productivity  
- 🔐 **Privacy-friendly** — your credentials never leave your machine  

---

## 📸 Screenshots
![TerminalGPT Screenshot](https://ibb.co/pjZQvpzF)

> Feel like you're chatting with AI from a hacker's command line.

---

## 🛠️ Prerequisites

Before building TerminalGPT, make sure you have the following installed:

### Required Software
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Platform-Specific Requirements

#### Windows
- **Visual Studio Build Tools** or **Visual Studio Community**
- **Python** (v3.x) - [Download here](https://www.python.org/downloads/)
- **Windows 10 SDK** (for native module compilation)

#### macOS
- **Xcode Command Line Tools** (for native module compilation)
- **macOS 10.14 or later** (for building)

#### Linux
- **Build essentials** (gcc, g++, make)
- **Python** (v3.x)
- **libgtk-3-dev** (for GTK+ support)

---

## 🚀 Quick Start

### Option 1: Using Build Scripts (Recommended)

#### macOS/Linux
```bash
git clone https://github.com/talhanoman/TerminalGPT.git
cd TerminalGPT
./build.sh
```

#### Windows
```cmd
git clone https://github.com/talhanoman/TerminalGPT.git
cd TerminalGPT
build.bat
```

### Option 2: Manual Build

#### 1. Clone the Repository
```bash
git clone https://github.com/talhanoman/TerminalGPT.git
cd TerminalGPT
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Run in Development Mode
```bash
npm run dev
# or
npm start
```

---

## 📦 Building for Distribution

### Build for All Platforms
```bash
npm run build
```

### Build for Specific Platform

#### Windows
```bash
npm run make:win
# or
npm run dist:win
```

#### macOS
```bash
npm run make:mac
# or
npm run dist:mac
```

#### Linux
```bash
npm run make:linux
# or
npm run dist:linux
```

### Build Output
After building, you'll find the distributable files in the `out/` directory:
- **Windows**: `.exe` installer and portable `.zip`
- **macOS**: `.dmg` installer and `.app` bundle
- **Linux**: `.deb`, `.rpm`, and `.AppImage` packages

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the app in development mode |
| `npm run dev` | Alias for `npm start` |
| `npm run build` | Build distributable packages for all platforms |
| `npm run make` | Alias for `npm run build` |
| `npm run make:win` | Build for Windows only |
| `npm run make:mac` | Build for macOS only |
| `npm run make:linux` | Build for Linux only |
| `npm run package` | Package the app without creating installers |
| `npm run clean` | Clean build artifacts and node_modules |
| `npm run rebuild` | Clean and reinstall dependencies |

### 🚀 Build Scripts
| Script | Platform | Description |
|--------|----------|-------------|
| `./build.sh` | macOS/Linux | Automated build script with dependency checks |
| `build.bat` | Windows | Automated build script with dependency checks |

> **Pro tip**: Use the build scripts for the easiest build experience - they handle dependency installation and platform detection automatically!

---

## 🔧 Troubleshooting

### Common Issues

#### Build Fails on Windows
```bash
# Install Windows Build Tools
npm install --global windows-build-tools

# Or use Visual Studio Installer to install:
# - MSVC v143 build tools
# - Windows 10 SDK
# - Python 3.x
```

#### Build Fails on macOS
```bash
# Install Xcode Command Line Tools
xcode-select --install
```

#### Build Fails on Linux
```bash
# Ubuntu/Debian
sudo apt-get install build-essential python3 libgtk-3-dev

# Fedora
sudo dnf install gcc-c++ make python3 gtk3-devel

# Arch Linux
sudo pacman -S base-devel python3 gtk3
```

#### Node Modules Issues
```bash
# Clean and reinstall
npm run clean
npm install
```

#### Electron Download Issues
```bash
# Set Electron mirror (if you're in China)
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
npm install
```

---

## 🏗️ Project Structure

```
TerminalGPT/
├── src/                    # Source code
│   ├── main.js            # Main process
│   ├── renderer.js        # Renderer process
│   ├── preload.js         # Preload script
│   ├── index.html         # Main window HTML
│   ├── index.css          # Main styles
│   └── styles/            # Additional styles
├── webpack.*.config.js    # Webpack configurations
├── forge.config.js        # Electron Forge configuration
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Styled with custom CSS overrides
- Powered by [ChatGPT](https://chat.openai.com/)

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section above
2. Search existing [Issues](https://github.com/talhanoman/TerminalGPT/issues)
3. Create a new issue with detailed information about your problem

---

**Happy coding! 🚀**

