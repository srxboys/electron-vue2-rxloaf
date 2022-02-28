// Browser environment sniffing

export default function plateform() {
  const inBrowser = typeof window !== 'undefined'
  const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
  const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
  const UA = inBrowser && window.navigator.userAgent.toLowerCase()
  // const isIE = UA && /msie|trident/.test(UA)
  // const isIE9 = UA && UA.indexOf('msie 9.0') > 0
  // const isEdge = UA && UA.indexOf('edge/') > 0
  // const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
  // const isPhantomJS = UA && /phantomjs/.test(UA)
  // const isFF = UA && UA.match(/firefox\/(\d+)/)
  // const isApp = !(isIE || isIE9 || isEdge || isPhantomJS || isChrome || isFF)

  const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
  const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
  const isApp = isAndroid || isIOS

  const isWin = UA && UA.indexOf('win') > 0
  const isMac = UA && UA.indexOf('mac') > 0
  const isLinux = UA && (UA.indexOf('x11') > 0 || UA.indexOf('linux') > 0)
  const pf = {
    ios: isIOS,
    android: isAndroid,
    app: isApp,
    web: !isApp,
    win: isWin,
    mac: isMac,
    linux: isLinux
  }
  return pf
}