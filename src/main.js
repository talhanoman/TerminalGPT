const { app, BrowserWindow } = require('electron');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const customCSS = `
  /* Terminal background and font */
  html, body, .flex.h-full.w-full.flex-col, .relative.flex.h-full.w-full.flex-1.transition-colors.z-0, .relative.flex.h-full.w-full.flex-row, .relative.flex.h-full.max-w-full.flex-1.flex-col {
    background: #181a1b !important;
    color: #00ff5f !important;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace' !important;
    border: none !important;
  }

  /* Remove all box shadows, border-radius, gradients */
  *, *:before, *:after {
    box-shadow: none !important;
    border-radius: 0 !important;
    background-image: none !important;
    border-color: #00ff5f !important;
  }

  /* Main chat area */
  main#main, #thread, .composer-parent, [data-testid^="conversation-turn-"] {
    background: #181a1b !important;
    color: #00ff5f !important;
    border: 1px solid #00ff5f !important;
    margin: 0 auto !important;
    padding: 0.5em 1em !important;
    max-width: 800px !important;
  }

  /* Chat bubbles/messages */
  [data-testid^="conversation-turn-"] {
    background: #181a1b !important;
    color: #00ff5f !important;
    border: none !important;
    margin-bottom: 0.5em !important;
    padding: 0.5em 0 !important;
  }

  /* Input area */
  form, textarea, input[type="text"], [data-testid="composer"] {
    background: #181a1b !important;
    color: #00ff5f !important;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace' !important;
    border: 1px solid #00ff5f !important;
    outline: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    font-size: 1.1rem !important;
    padding: 0.5em !important;
  }

  /* Buttons */
  button, [role="button"], .btn, .btn-primary, .btn-secondary {
    background: #181a1b !important;
    color: #00ff5f !important;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace' !important;
    border: 1px solid #00ff5f !important;
    border-radius: 0 !important;
    font-weight: 600 !important;
    box-shadow: none !important;
    transition: none !important;
    padding: 0.5em 1em !important;
  }
  button:hover, [role="button"]:hover, .btn:hover, .btn-primary:hover, .btn-secondary:hover {
    background: #222 !important;
    color: #00ff5f !important;
    border: 1px solid #00ff5f !important;
  }

  /* Links */
  a, .text-green-500, .text-brand-green {
    color: #00ff5f !important;
    text-decoration: underline !important;
  }

  /* Hide all branding, avatars, icons, and unnecessary UI */
  .draggable.h-header-height,
  [data-testid="profile-button"],
  [data-testid="model-switcher-dropdown-button"],
  [data-testid="mobile-login-button"],
  [data-testid="login-button"],
  [data-testid="signup-button"],
  .bg-token-main-surface-primary.fixed,
  .bg-token-main-surface-primary.absolute,
  .bg-token-main-surface-primary.sticky,
  .bg-token-bg-primary.sticky,
  .bg-token-bg-primary.absolute,
  .bg-token-bg-primary.fixed,
  [aria-label*='ChatGPT'], [data-testid="user-avatar"], [data-testid="bot-avatar"], .icon, .icon-lg, .icon-sm {
    display: none !important;
  }
`;

const vimJS = `
(function() {
  // Key mapping: key => selector
  const keyMap = {
    'a': '[aria-label="Attach"]', // Attach button
    's': 'form button[type="submit"]', // Send button
    'i': 'textarea, [data-testid="composer"]', // Input field
  };

  document.addEventListener('keydown', function(e) {
    // If typing in an input/textarea, only handle Esc
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) || document.activeElement.getAttribute('data-testid') === 'composer') {
      if (e.key === 'Escape') {
        document.activeElement.blur();
        e.preventDefault();
      }
      return;
    }
    // Vim-like navigation
    if (e.key in keyMap) {
      const el = document.querySelector(keyMap[e.key]);
      if (el) {
        if (e.key === 's') {
          el.click(); // Send
        } else {
          el.focus();
        }
        e.preventDefault();
      }
    }
  }, true);
})();
`;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Use a modern Chrome user agent string
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

  mainWindow.loadURL('https://chatgpt.com', { userAgent });

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.insertCSS(customCSS).catch(() => {});
    mainWindow.webContents.executeJavaScript(vimJS).catch(() => {});
  });

  // Open the DevTools in development.
  // if (process.env.NODE_ENV === 'development') {
  //   mainWindow.webContents.openDevTools();
  // }
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
