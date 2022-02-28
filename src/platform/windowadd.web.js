import Platform from '@/platform/platform.APP_TARGET'
import StartPlatfomr from './startPlatform'

export default function Windowsadd(router) {
  const pagePath = StartPlatfomr(Platform)
  if (!pagePath) {
    console.error('pagePath=null   Platform=', Platform)
    return
  }
  const path = '/' + pagePath
  console.log('router=', router, ' path=', path)
  router.push({ path })
}
