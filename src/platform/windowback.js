import { ipcRenderer } from 'electron'

export default function Windowsadd(router) {
  ipcRenderer.send('remove-window')
}