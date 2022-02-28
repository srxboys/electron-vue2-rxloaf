import { BrowserWindow } from 'electron'

export default function CreateFullScreen(parsent) {
  const localWin = new BrowserWindow({
    frame: false,
    fullscreen: true,
    paintWhenInitiallyHiddenBoolean: true,
    autoHideMenuBar: true,
    transparent: true,
    visualEffectState: true,
    titleBarStyle: false,
    // alwaysOnTop: true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    }
  })

  localWin.getMaximumSize()
  localWin.hide()
  return localWin
}