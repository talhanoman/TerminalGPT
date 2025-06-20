const { app, BrowserWindow } = require('electron');
const { customCSS } = require('./styles/overrides.ts');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false, // Hide window initially
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Use a modern Chrome user agent string
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

  mainWindow.loadURL('https://chatgpt.com', { userAgent });

  mainWindow.webContents.on('did-finish-load', async () => {
    try {
      // Inject loading overlay first
      const loadingOverlay = `
        <div id="terminal-loading-overlay" style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #181a1b;
          color: #00ff5f;
          font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace';
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
          border: none;
        ">
          <div style="
            text-align: center;
            border: 1px solid #00ff5f;
            padding: 2rem;
            background: #181a1b;
          ">
            <div style="
              font-size: 1.2rem;
              margin-bottom: 1rem;
              letter-spacing: 0.1em;
            ">
              INITIALIZING CHATGPT TERMINAL<span style="
                display: inline-block;
                width: 8px;
                height: 16px;
                background: #00ff5f;
                animation: blink 1s infinite;
              "></span>
            </div>
            <div style="
              display: inline-block;
              width: 20px;
              height: 20px;
              border: 2px solid #00ff5f;
              border-radius: 50%;
              border-top-color: transparent;
              animation: spin 1s ease-in-out infinite;
            "></div>
            <div style="
              font-size: 0.9rem;
              margin-top: 1rem;
              opacity: 0.8;
            ">
              Loading interface and applying terminal styles...
            </div>
          </div>
          <style>
            @keyframes spin { to { transform: rotate(360deg); } }
            @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
          </style>
        </div>
      `;
      
      await mainWindow.webContents.executeJavaScript(`
        document.body.insertAdjacentHTML('afterbegin', \`${loadingOverlay}\`);
      `);

      // Show the window with loading overlay
      mainWindow.show();

      // Apply custom styles
      await mainWindow.webContents.insertCSS(customCSS);
      
      // Small delay to ensure styles are fully applied
      setTimeout(async () => {
        // Remove the loading overlay
        await mainWindow.webContents.executeJavaScript(`
          const overlay = document.getElementById('terminal-loading-overlay');
          if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => overlay.remove(), 300);
          }
        `);
      }, 200);
    } catch (error) {
      console.error('Failed to apply custom styles:', error);
      // Show window even if styles fail to apply
      mainWindow.show();
    }
  });

  // Open the DevTools in development.
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
