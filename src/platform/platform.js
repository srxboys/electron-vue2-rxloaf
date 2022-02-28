
const isWin = process.platform === 'win32'
const isMac = process.platform === 'darwin'
const isLinux = process.platform === 'linux'

export default function plateform() {
  return {
    ios: false,
    android: false,
    app: false,
    web: false,
    win: isWin,
    mac: isMac,
    linux: isLinux
  }
}