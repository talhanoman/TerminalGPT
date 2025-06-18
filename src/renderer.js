/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const webview = document.getElementById('chatgpt-view');

webview.addEventListener('dom-ready', () => {
  // Inject custom styles into the ChatGPT page
  webview.insertCSS(`
    /* Override ChatGPT's default font */
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    }
    
    /* Customize the chat interface */
    .markdown {
      font-size: 15px !important;
      line-height: 1.6 !important;
    }
    
    /* Customize the input area */
    .stretch {
      border-radius: 8px !important;
    }
  `);
});

// Handle navigation events
webview.addEventListener('will-navigate', (event) => {
  // You can add custom navigation handling here if needed
  console.log('Navigating to:', event.url);
});
