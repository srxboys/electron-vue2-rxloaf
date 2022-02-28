// windows 托盘
// windows 托盘
//参考 https://www.cnblogs.com/zjf-1992/p/7534944.html

const { app, Menu, Tray, nativeImage } = require('electron')
const path = require('path')
const { openNewwin, openDialog } = require('../window/renderer')
import { RxLog } from '../utils/utils'
import { MainWinAwaken } from '../window/app'
const isProduction = process.env.NODE_ENV === 'production'

//用一个 Tray 来表示一个图标,这个图标处于正在运行的系统的通知区 ，
// 通常被添加到一个 context menu 上.

//托盘对象
export function createTray() {
  // if (process.platform !== 'win32') {
  //   return { rx_des: 'not is window -> srxboys' }
  // }

  let appTray = null
  //系统托盘右键菜单
  var trayMenuTemplate = [
    {
      label: '关于',
      click: function () {
        MainWinAwaken()
        openNewwin( {
          query: '#/about',
          showInactive: true
        });
      }
    },
    {
      type: 'separator',  // 分割线
    },
    {
      label: '退出',
      click: function () {
        //ipc.send('close-main-window');
        app.quit();
      }
    }
  ];

  //系统托盘图标目录
  let iconPath = nativeImage.createFromPath(path.join(__dirname, '../src/assets/img', 'umbrella.png'))
  if (isProduction) {
    // win -> 线上 `__dirname` 为 `安装目录 -> resources根目录`
    iconPath= nativeImage.createFromPath(path.join(__dirname, 'umbrella.png'))
  }
  // RxLog.log('icon path=', iconPath)
  appTray = new Tray(iconPath);

  //图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);

  //设置此托盘图标的悬停提示内容
  appTray.setToolTip('This is my application.');

  //设置此图标的上下文菜单
  appTray.setContextMenu(contextMenu);

  let timeCount = 0
  appTray.on('click', function(event) {
    setTimeout(() => {
      if (timeCount === 0) {
        RxLog.log('单击11111')
      }
      timeCount = 0
    }, 300);
    MainWinAwaken()
  })

  appTray.on('double-click', function(event){
    RxLog.log('双击事件2222')
    timeCount = 1
  })

  return appTray
}

