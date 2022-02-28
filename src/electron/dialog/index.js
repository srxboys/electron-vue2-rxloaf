const { dialog } = require('electron')
import MainWindow from '../window/app'

export default function dialogShow({
  title = '提示',
  message = '',
  detail = '',
  win = null,
}) {
  if (!win) {
    win = MainWindow()
  }
  const browserWindow = win;
  dialog.showMessageBox(
    browserWindow,
    {
      title,
      message,
      detail,
    }
  )
}