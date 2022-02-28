
import { formatInt } from './utils'

export function dayHourMinSecond(interval) {
  interval = formatInt(interval)
  const day = parseInt(interval / (60 * 60 * 24))
  const hour = parseInt(interval % (60 * 60 * 24) / 3600)
  const minute = parseInt(interval % (60 * 60 * 24) % 3600 / 60)
  const second = parseInt(interval % (60 * 60 * 24) % 3600 % 60)
  return { day, hour, minute, second }
}

export function hourMinSecond(interval) {
  interval = formatInt(interval)
  const hour = parseInt(interval / 3600)
  const minute = parseInt(interval % 3600 / 60)
  const second = parseInt(interval % 3600 % 60)
  return { hour, minute, second }
}

export const formatDateString = (time, format = 'YY-MM-DD hh:mm:ss') => {
  if (typeof time === 'undefined') {
    time = new Date()
  }
  const date = new Date(time)

  const year = date.getFullYear()
  const month = date.getMonth() + 1// 月份是从0开始的
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const preArr = Array.apply(null, Array(10)).map(function (elem, index) {
    return '0' + index
  }) // 开个长度为10的数组 格式为 00 01 02 03

  const newTimeString = format.replace(/YY/g, year)
    .replace(/MM/g, preArr[month] || month)
    .replace(/DD/g, preArr[day] || day)
    .replace(/hh/g, preArr[hour] || hour)
    .replace(/mm/g, preArr[min] || min)
    .replace(/ss/g, preArr[sec] || sec)

  return newTimeString
}

/**
 * 【时间字符串转时间戳】
 * 2020-08-07 -> 时间戳
 * 2020-08-07 00:00:00  -> 时间戳
 */
export const StrToTime = (str) => {
  str = str || ''
  const lastStr = str.replaceAll('-', '/') || ''
  let time = new Date(lastStr).getTime()
  if (!time) {
    time = 0
  }
  return time
}

export const IsSameDay = (timeStampA, timeStampB) => {
  const dateA = new Date(timeStampA)
  const dateB = new Date(timeStampB)
  return (dateA.setHours(0, 0, 0, 0) === dateB.setHours(0, 0, 0, 0))
}
