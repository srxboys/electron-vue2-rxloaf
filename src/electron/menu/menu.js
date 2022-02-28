const { app, Menu, shell } = require('electron')
import { openNewwin, openDialog } from '../window/renderer'
const { DeviceDev } = require('../../utils/utils')

const prod = process.env.NODE_ENV === 'production' ? true : false
// const isMac = process.platform === 'darwin'

export default () => {
  const template = [
    {
      label: '会员识别', // dev环境还是 Electron 不用关心
      submenu: [
        {
          label: '关于',
          click: async () => {
            openNewwin( {
              query: '#/about',
              showInactive: true
            });
          },
        },
        {
          type: 'separator',  // 分割线
        },
        {
          label: '退出',
          accelerator: (function () {
            if (process.platform === 'darwin') {
              return 'Command+W'
            } else {
              return 'Ctrl+Q'
            }
          })(),
          click() { app.quit(); },
        },
        // 以下 windows 不允许
        // ...(DeviceDev ? [{
        //   label: '测试 dialog',
        //   click() {
        //     openDialog()
        //   },
        // }]: [])
      ],
    },
    {
      label: '窗口',
      submenu: [
        {
          label: '最小化',
          accelerator: (function () {
            if (process.platform === 'darwin') {
              return 'Command+M'
            } else {
              return 'Ctrl+M'
            }
          })(),
          role: 'minimize'
        },
        {
          label: '缩小',
          role: 'zoomout',
        },
        {
          label: '放大',
          role: 'zoomin',
        },
        {
          label: '重置缩放',
          role: 'resetzoom',
        },
        {
          type: 'separator',
        },
        {
          label: '全屏',
          role: 'togglefullscreen',
        },
        // 以下 windows 不允许
        // (!prod ? {
        //   label: '切换开发者工具',
        //   accelerator: (function () {
        //     if (process.platform === 'darwin') {
        //       return 'Alt+Command+I'
        //     } else {
        //       return 'Ctrl+Shift+I'
        //     }
        //   })(),
        //   click: function (item, focusedWindow) {
        //     if (focusedWindow) {
        //       focusedWindow.toggleDevTools()
        //     }
        //   }
        // } : {})
      ],
    },
  ];
  const m = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(m);
}
