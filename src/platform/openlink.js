import { shell } from 'electron'

export default function openLink(url) {
  shell.openExternal(url)
}