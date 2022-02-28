import Platform from '@/platform/platform.APP_TARGET'

import { ipcRenderer } from 'electron'
import StartPlatfomr from './startPlatform'

export default function Windowsadd(router) {
  const pagePath = StartPlatfomr(Platform)
  if (!pagePath) {
    console.error('pagePath=null   Platform=', Platform)
    return
  }

  ipcRenderer.send('add-window', pagePath)
}