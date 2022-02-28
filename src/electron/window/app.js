const { BrowserWindow } = require('electron')

export default function MainWindow() {
  const winAll = BrowserWindow.getAllWindows()
  // RxLog.log("win winAll=", winAll)
  const winCount = winAll.length
  const lastWin = winAll[winCount - 1]
  return lastWin
}

export function MainWinAwaken() {
  const win = MainWindow()
  win && win.show()
}