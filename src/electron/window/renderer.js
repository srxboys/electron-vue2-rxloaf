const { BrowserWindow, dialog } = require('electron')
const MainInter = require('./main-inter')
import { RxLog } from '../utils/utils'
import MainWindow from './app'
const prod = process.env.NODE_ENV === 'production' ? true : false

export function resetUrl() {
  const window = MainWindow()
  if(!window) return;
  let newUrl = MainInter.url();
  window.loadURL(newUrl)
}

export function openNewwin({
  nullParent = false,
  parent = null,
  query,
  width=400,
  height=300,
  kiosk = false,
  isFullScreen = false,
  resizable = true,
  nodeIntegration = true,
  showInactive = false,
  showDevTools = true,
  ...other
}) {
  const window = MainWindow() || {}
  // RxLog.log('openNewwin - window=', window)
  let localWindow = new BrowserWindow ({
    width,
    height,
    resizable,
    isFullScreen,
    modal: true, // 如true. mac 上 就自己写关闭
    titleBarStyle: 'default',
    alwaysOnTop: true,
    show: false,
    autoHideMenuBar: true,
    kiosk: kiosk,
    paintWhenInitiallyHiddenBoolean: true,
    parent: nullParent ? null : (parent ? parent : window),
    // parent: window,
    webPreferences: {
      nodeIntegration, // 这行代码表示允许使用 node API
      contextIsolation: false, // 为了安全必须指定
    },
    ...other
  })

  if (!prod && showDevTools && MainInter.isDev()) {
    localWindow.webContents.openDevTools();
  }

  const newUrl = MainInter.url() + query;
  // RxLog.log('newUrl-', newUrl)
  localWindow.loadURL(newUrl);

  if (showInactive) {
    localWindow.showInactive()
  }

  if (isFullScreen){
    localWindow.maximize()
  }

  localWindow.once('ready-to-show', () => {
    localWindow.show()
  })

  localWindow.on("close", function() {
    RxLog.log('子窗口关闭')
  })
  return localWindow
}

export function openDialog() {
  const browserWindow = MainWindow() || {}
  dialog.showMessageBox(
    browserWindow,
    {
      title: '关于',
      message: '内容',
      detail: 'detail----随便内容',
    }
  )
}