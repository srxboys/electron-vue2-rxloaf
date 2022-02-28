<template>
  <div class="home fix" :class="rootClass">
    <div class="left">
      <div class="btn" @click="click">
        <div class="liner">
          <b>摸鱼</b>
        </div>
        <div class="btn_tip">
          <div>请注意</div>
          <div>即将进入全屏，可以按 <b>{{clickTop}}</b> 键退出</div>
          <!-- <div class="enter">进入</div> -->
        </div>
      </div>
      <div class="bt">
        <div class="des">这不是原创，来源抖音 </div>
        <div class="copy">© 2021 srxboys</div>
        <div class="link">
          <a @click.stop="open(0)">GitHub - Loaf (原作者)</a>
          <a @click.stop="open(1)">Github - sysup</a>
          <a @click.stop="open(2)">Gitee - sysup</a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title"><b>这是一个摸鱼App</b></div>
      <div class="tip">其实这是一个玩笑</div>
      <div class="tip">点击 <b>摸鱼</b> 按钮后应用会显示一个 <b>系统 Update</b> 画面，你的老板以为你的电脑正在升级。</div>
      <div class="tip">这个时候你就可以休息一下，优雅地喝一杯咖啡。</div>
      <div class="tip">不要有内疚感，适当的休息可以让你的大脑重新充满活力，面对更多挑战，更高效的完成工作。</div>
      <div class="tip">所以放心大胆的使用  <b>摸鱼</b> 吧</div>
    </div>
  </div>
</template>

<script>
import { DeviceIsElectron } from '@/utils/utils'
import Windowadd from '@/platform/windowadd.APP_TARGET'
import platform from '@/platform/platform.APP_TARGET'
import OpenLink from '@/platform/openlink.APP_TARGET'
export default {
  computed: {
    rootClass() {
      const p = platform()
      const app = p.app || false
      if (!DeviceIsElectron && app) {
        return 'm'
      }
      return 'h'
    },
    clickTop() {
      const p = platform()
      const app = p.app || false
      const web = p.web || false
      if (!DeviceIsElectron && (app || web)) {
        return 'double-click'
      }
      return 'ESC'
    }
  },
  methods: {
    click() {
      const router = this.$router
      Windowadd(router)
    },
    open(index) {
      let url = ''
      switch (index) {
        case 1:
          url = 'https://github.com/srxboys/electron-vue2-rxloaf-issua'
          break
        case 2:
          url = 'https://gitee.com/pulpous/electron-vue2-rxloaf-issua'
          break
        default:
          url = 'https://github.com/DinoChan/Loaf'
          break
      }
      OpenLink(url)
    }
  },
}
</script>

<style scoped>
.h {display: flex; padding: 40px; justify-content: space-between;}
.m {padding: 40px;}
.left {position: relative; display: flex; justify-content: space-between; flex-direction: column;}
.left .btn {padding: 4px; border-radius: 8px;  width: 200px; overflow: hidden;
background: linear-gradient(-40deg, blue, yellow, green);
 box-shadow: 0px 0px 40px 20px rgba(110, 242, 110, 0.1), 4px 2px 20px 10px rgba(110, 242, 110, .2); position: relative;}
.left .btn .liner {padding: 10px 40px; font-size: 20px; background: black; display: flex; justify-content: center; align-items: center; border-radius: 8px;}
.left .btn .btn_tip {position: absolute; left: 0; right: 0; top: 115%; z-index: 2; border: 1px solid white; border-radius: 8px; padding: 15px 10px;}
.left .btn:hover { overflow: visible; }
.btn_tip::before {
  content: ''; position: absolute; left: 50%; top: -9px; width: 20px; height: 20px; margin-left: -10px;
  background: linear-gradient(135deg, transparent 0, transparent 50%, white 50%, white 50%, transparent 100%) left top / 50% 50% no-repeat,
    linear-gradient(225deg, transparent 0, transparent 50%, white 50%, white 50%, transparent 100%) right top / 50% 50% no-repeat;
}
.bt { font-size: 14px; color: rgb(210, 191, 191);}
.bt .des {padding: 2px 0;}
.bt .copy {color: gray}
.bt .link {margin-top: 10px; display: flex; flex-direction: column;}
.bt .link a {color: rgb(52, 128, 221); text-decoration: none;}
.bt .link a:hover {text-decoration: underline;}

.right {margin-left: 50px; color: gray;}
.m .right { margin-top: 20px; margin-left: 0; border-top: 1px solid grey; padding-top: 10px;}
.right .title {color: rgb(52, 128, 221); font-size: 18px;}
.right .tip {margin-top: 20px;}
.right .tip b {color: rgb(175, 164, 164)}

</style>