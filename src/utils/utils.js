/**
 * Utils
 */

// in electron
export const DeviceIsElectron = process.env && process.env.VUE_APP_DEVICE && process.env.VUE_APP_DEVICE === 'electron'
// in Vue
export const DeviceIsWeb = process.env && process.env.VUE_APP_DEVICE && process.env.VUE_APP_DEVICE === 'web'
// env development
export const DeviceDev = process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'development'

export const formatInt = (value) => {
  if (!value) return 0
  if (isNaN(value)) return 0
  if (typeof value === 'string') {
    const result = parseInt(value)
    if (isNaN(result)) return 0
    return result
  } else if (typeof value !== 'number') {
    return 0
  }
  return value
}
