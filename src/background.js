'use strict'

import { app, protocol, BrowserWindow, nativeTheme, globalShortcut, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { openNewwin } from './electron/window/renderer'
import NewMenuCreate from './electron/menu/menu'
// import FullWin from './electron/window/fullwin'
const electron = require('electron')

import { createTray } from './electron/menu/tray'
const isDevelopment = process.env.NODE_ENV !== 'production'

let WinTray = null

let MainWin = null

// let SpaceFullScreen = null

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow () {
  console.log('create window ----')
  // Create the browser window.
  MainWin = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    kiosk: false,
    frame: true,
    maximizable: false,
    minimizable: false,
    resizable: false,
    paintWhenInitiallyHiddenBoolean: true,
    // alwaysOnTop: true,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    console.log('本地联调')
    // Load the url of the dev server if in development mode
    await MainWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) MainWin.webContents.openDevTools()
  } else {
    // console.log('线上环境')
    createProtocol('app')
    // Load the index.html when not in development
    MainWin.loadURL('app://./index.html')
  }

  // 主题样式
  nativeTheme.themeSource = 'dark'

  // 不可以写到 on('read') 中，window不好使
  globalShortcut.register('ESC', function() {
    // SpaceFullScreen.hide()
    // SpaceFullScreen.setAlwaysOnTop(false)
    MainWinRmChild()
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // console.log('window-all-closed')
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
  app.quit()
})

app.on('activate', () => {
  const winArray = BrowserWindow.getAllWindows()
  let length = 1
  if (winArray && Array.isArray(winArray)) {
    length = winArray.length
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    console.log('activate - length=', length)
    if (length === 0) createWindow()
  } else {
    console.log('activate - else create', length)
    createWindow()
  }
  console.log('---app.on--active-- length=', length)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  // console.log('-------------app.on.ready--------')
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
  createWindow()
  NewMenuCreate()
  // 创建 win -> 托盘
  WinTray = createTray()
  console.log('WinTray=', WinTray)

  // SpaceFullScreen = FullWin()
  // SpaceFullScreen.setOpacity(0)
  // SpaceFullScreen.hide()
})


function  MainWinRmChild() {
  const mainDisplay = electron.screen.getPrimaryDisplay()
  // const arrWin = SpaceFullScreen.getChildWindows()
  const arrWin = BrowserWindow.getAllWindows()
  // console.log('globalShortcut.register ESC arrWin=', arrWin)
  if (!(arrWin && Array.isArray(arrWin))) return
  const len = arrWin.length
  // console.log('globalShortcut.register ESC len=', len)
  try {
    for (let i = 0; i < len - 1; i ++) {
      const w = arrWin[i]
      if (w.id !== mainDisplay.id) {
        w.destroy()
      }
    }
  } catch (error) {
    console.log('ESC error=', error)
  }
  MainWin.focus()
}

ipcMain.on('remove-window', function() {
  const winArray = MainWin.getChildWindows()
  console.log('winArray=', winArray)
  if (winArray && Array.isArray(winArray)) {
    const len = winArray.length

    for (let i = 0; i < len; i++) {
      const w = winArray[i]
      w.close()
    }
  }
})

ipcMain.on('add-window', function(event, arg) {
  console.log('arg=', arg)

  // const prod = process.env.NODE_ENV === 'production' ? true : false
  // const platform = prod ? arg : 'win'
  const platform = arg
  function createWin(x,y, width, height, internal) {
    const w = openNewwin({
      // parent: SpaceFullScreen,
      nullParent: true,

      nodeIntegration: true,
      x,y,
      query: internal ? '#/' + platform : '#/blank',
      isFullScreen: true,
      showInactive: false,
      // modal: true,
      showDevTools: false,

      frame: false,
      fullscreenable: true,
      // simpleFullscreen: true, // mac 有bug ，不要用
      // autoHideMenuBar : true,
      // kiosk: false,
      // backgroundColor: '#000',
      darkTheme: true,
      // enableLargerThanScreen: true,
      // skipTaskbar: true,
      // focusable: true,
      // titleBarStyle: 'hidden',
      // vibrancy: 'dark',
    })
    setTimeout(() => {
      w.setFullScreen(true)
    }, 10);
  }

  // 测试 单屏
  // createWin(0, 0, true)

  // 多个 外接显示器
  const displays = electron.screen.getAllDisplays()
  const mainDisplay = electron.screen.getPrimaryDisplay()

  function isInternal(tempWin) {
    let internal = tempWin.internal || false // 内部的
    if (!internal) {
      // is not Notebook computer
      // console.log('\n\ntempWin=', tempWin)
      // console.log('mainDisplay=', mainDisplay)
      if (tempWin.id === mainDisplay.id) {
        internal = true
      }
    }
    return internal
  }

  // console.log('displays=', displays)
  for (let i = 0; i < displays.length; i ++) {
    const dis = displays[i]
    const internal = isInternal(dis)
    console.log('i=', i, ' internal=', internal)
    const bounds = dis.bounds || { x:0, y:0, width: 0, height: 0}
    const x = bounds.x
    const y = bounds.y
    const width = bounds.width
    const height = bounds.height
    createWin(x, y, width, height, internal)
  }
  // SpaceFullScreen.setAlwaysOnTop(true)
  // SpaceFullScreen.isVisible()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

app.on('will-quit', () => {
  // 注销所有快捷键
  // MainWinRmChild()
  globalShortcut.unregisterAll()
})