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

  /* Header visible and terminal styled */
  .draggable.h-header-height,
  #page-header {
    display: flex !important;
    background: #181a1b !important;
    color: #00ff5f !important;
    border-bottom: 1px solid #00ff5f !important;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace' !important;
    align-items: center !important;
    min-height: 3em !important;
    z-index: 1000 !important;
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
  [data-testid="profile-button"],
  [data-testid="mobile-login-button"],
  [data-testid="login-button"],
  [data-testid="signup-button"],
  .bg-token-main-surface-primary.fixed,
  .bg-token-main-surface-primary.absolute,
  .bg-token-main-surface-primary.sticky,
  .bg-token-bg-primary.sticky,
  .bg-token-bg-primary.absolute,
  .bg-token-bg-primary.fixed,
  [aria-label*='ChatGPT'], [data-testid="user-avatar"], [data-testid="bot-avatar"] {
    display: none !important;
  }

  /* Make model switcher button and its icon visible and styled */
  [data-testid="model-switcher-dropdown-button"] {
    display: flex !important;
    background: #181a1b !important;
    color: #00ff5f !important;
    border: 1px solid #00ff5f !important;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace' !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    min-height: 2.5em !important;
    min-width: 6em !important;
    align-items: center !important;
    justify-content: center !important;
  }
  [data-testid="model-switcher-dropdown-button"] .icon,
  [data-testid="model-switcher-dropdown-button"] .icon-sm {
    display: inline !important;
    color: #00ff5f !important;
    width: 1em !important;
    height: 1em !important;
  }

  /* Sidebar open/close button visible and styled */
  [data-testid="open-sidebar-button"],
  [data-testid="close-sidebar-button"] {
    display: flex !important;
    background: #181a1b !important;
    color: #00ff5f !important;
    border: 1px solid #00ff5f !important;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace' !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 2.5em !important;
    min-height: 2.5em !important;
  }
  [data-testid="open-sidebar-button"] .icon,
  [data-testid="open-sidebar-button"] .icon-sm,
  [data-testid="close-sidebar-button"] .icon,
  [data-testid="close-sidebar-button"] .icon-sm {
    display: inline !important;
    color: #00ff5f !important;
    width: 1em !important;
    height: 1em !important;
  }

  /* Status bar styling */
  #vim-status-bar {
    position: fixed;
    left: 0; right: 0; bottom: 0;
    background: #181a1b;
    color: #00ff5f;
    font-family: 'Fira Mono', 'Menlo', 'Consolas', 'monospace';
    font-size: 1rem;
    border-top: 1px solid #00ff5f;
    padding: 0.2em 1em;
    z-index: 9999;
    pointer-events: none;
    user-select: none;
    text-align: left;
    letter-spacing: 0.1em;
  }
`;

export { customCSS };