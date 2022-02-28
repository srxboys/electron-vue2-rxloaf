const webpack = require('webpack')

module.exports = {
  // github / gitee
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  pages: {
    index: {
      // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: '摸鱼rx'
    }
  },
  configureWebpack: config => {
    // console.log('config=', config)
    const plugins = []
    plugins.push(
      // https://www.freesion.com/article/39051371438/
      new webpack.NormalModuleReplacementPlugin(/(.*)APP_TARGET(\.*)/,
        function (resourse) {
          const appTarget = process.env.VUE_APP_DEVICE === 'web' ? '.web' : ''
          // console.log('plugins -> appTarget=', appTarget)
          const request = resourse.request.replace(/.APP_TARGET/, `${appTarget}`)
          resourse.request = request
          // console.log('plugins-> request=', request)
          const dependencies = resourse.dependencies || []
          if (dependencies && Array.isArray(dependencies) && dependencies.length) {
            for (let i = 0; i < dependencies.length; i ++) {
              const d = dependencies[i] || {}
              d.request = request
              d.userRequest = request
              resourse.dependencies[i] = d
            }
          }
          // console.log('plugins -> resourse=', resourse)
      }),
    )
    config.plugins = [...config.plugins, ...plugins]


    const alias = {
      'assets': '@/assets',
    }
    if (process.env.VUE_APP_DEVICE === 'electron') {
      // alias.electron = 'electron.js'
    }
    config.resolve.alias = Object.assign(alias, config.resolve.alias)
  },
  productionSourceMap: false,
  css: {
    extract: false
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        // https://www.electron.build/configuration/configuration
        appId: 'com.srxboys.my',
        productName: 'loaf-rx',
        icon: './public/icon/icon.ico',
        compression: 'maximum',
        // https://www.electron.build/file-patterns#file-macros
        artifactName: '${productName}-Setup-${os}-v${version}.${ext}',

        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications'
            },
            {
              x: 130,
              y: 150,
              type: 'file'
            }
          ]
        },
        mac: {
          icon: './public/icon/icon.icos', //故意写错的，需要 512x512的尺寸
          // electron 打包mac的安装包没有菜单的问题解决
          // https://www.jianshu.com/p/fae4d65220a7
          extendInfo: {
            LSUIElement: 0
          }
        },
        win: { // win相关配置
          icon: './public/icon/icon.ico', // 图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: 'nsis', // 利用nsis制作安装程序
              arch: [
                'x64', // 64位
                'ia32'// 32位
              ]
            }
          ]
        },

        nsis: {
          // 是否一键安装，建议为 false，可以让用户点击下一步、下一步、下一步的形式安装程序，如果为true，当用户双击构建好的程序，自动安装程序并打开，即：一键安装（one-click installer）
          oneClick: false,
          // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowElevation: true,
          // 允许修改安装目录，建议为 true，是否允许用户改变安装目录，默认是不允许
          allowToChangeInstallationDirectory: true,
          // 安装图标
          installerIcon: './public/icon/icon.ico',
          // 卸载图标
          uninstallerIcon: './public/icon/icon.ico',
          // 安装时头部图标
          installerHeaderIcon: './public/icon/icon.ico',
          // 创建桌面图标
          createDesktopShortcut: true,
          // 创建开始菜单图标
          createStartMenuShortcut: true,
          // 图标名称
          shortcutName: '摸鱼rx',
        },
        // extraFiles:[
        //   "./build/left.png",
        //   "./build/pigapp.exe",
        //   "./build/update.exe"
        // ]
      }
    }
  },
}