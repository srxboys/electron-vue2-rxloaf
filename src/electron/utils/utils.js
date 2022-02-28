export const isWin = process.platform === 'win32'
export const isMac = process.platform === 'darwin'
export const isLinux = process.platform === 'linux'

export const RxLog = {}
RxLog.log = function(...other) {
  console.log('------ log -----')
  console.log(other)
  console.log(' ')
}

RxLog.error = function(...other) {
  console.log('**** error ****')
  console.log(other)
  console.log(' ')
}