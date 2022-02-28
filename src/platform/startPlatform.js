
/**
 * 返回平台名
 * @param {function} platform 判断平台方法
 */
export default function SelectPlatform(platform) {
  let pagePath = ''
  const pf = platform()
  if (pf.app) {
    if (pf.ios) {
      pagePath = 'ios'
    } else {
      pagePath = 'android'
    }
  } else {
    if (pf.web) {
      pagePath = 'web'
    }

    if (pf.win) {
      pagePath = 'win'
    } else if (pf.mac) {
      pagePath = 'mac'
    } else if (pf.linux) {
      pagePath = 'linux'
    }
  }
  return pagePath
}