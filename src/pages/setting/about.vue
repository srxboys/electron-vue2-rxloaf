<template>
  <div class="fix about" @click="click">
    <div class="tip">关于</div>
    <div class="c">
      <div>
        <div class="name"><b>摸鱼</b></div>
        <div class="des">Electron: <i>13.6.3</i></div>
        <div class="des">Node.js: <i>14.15.2</i></div>
        <div class="des">Vue: <i>2.6.11</i></div>
        <div class="des">vue-router: <i>3.5.3</i></div>
      </div>
    </div>
    <div class="foot">
      <div class="t">警告: 本产品仅仅是个人开发练手，如使用产品造成任何问题概不负责</div>
      <div class="t">Copy © srxboys.cn 2020-12-31</div>
    </div>
  </div>
</template>

<script>
import Windowback from '@/platform/windowback.APP_TARGET'
export default {
  methods: {
    click() {
      const router = this.$router
      Windowback(router)
    }
  }
}
</script>

<style>
.about {background: white; padding: 10px; font-size: 14px;}
.about .tip {text-align: center; font-size: 24px; font-weight: bold;}
.about .c {margin-top: 20px;}
.about .c .name {color: rgb(52, 128, 221); margin-bottom: 10px; font-size: 20px;}
.about .foot {margin-top: 10px;}
.about .foot .t {font-size: 13px; color: grey; margin-top: 10px;}
</style>