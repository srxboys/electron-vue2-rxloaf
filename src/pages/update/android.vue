<template>
  <div class="page hiddenCusor" @click="click">
    <div class="c" style="point-event:none;">
      <img src="~assets/img/android.png">
      <div class="des">Installing system update</div>
    </div>
    <div class="progress">
      <div class="bar" :style="{width}"></div>
    </div>
    <div class="tiplist hidden_scroller" updated ref='tiplist'>
      <div class="tip" v-for="(item,i) in tips" :key="'1'+i">{{item}}</div>
    </div>
  </div>
</template>

<script>
import AndroidData from './texts/android'
export default {
  data() {
    return {
      count: 0,
      barWidth: 2,
      timer: null,
      timeInterval: 1500,

      clickTimer: null,
      clickCount: 0,

      AndroidData,
      tipIndex: 0,
      tips: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadProgress()
    })
  },
  computed: {
    width() {
      return this.barWidth + '%'
    }
  },
  updated() {
    this.$nextTick(() => {
      const list = this.$refs.tiplist
      list.scrollTop = list.scrollHeight
    })
  },
  methods: {
    click() {
      // Custom double click event.
      if (this.clickTimer && this.clickCount === 0) {
        this.$router.back()
      } else if (!this.clickTimer) {
        this.clickTimer = setTimeout(() => {
          this.clickCount = 1
        }, 500)
      } else {
        clearTimeout(this.clickTimer)
        this.clickTimer = null
        this.clickCount = 0
      }
    },
    loadProgress() {
      this.timer = setInterval(() => {
        if (this.barWidth + 1 > 90) {
          if (this.count > 3) {
            this.barWidth = 2
            this.count = 0
            this.timeInterval = 1500
          } else {
            this.count += 1
          }
        } else if (this.barWidth + 1 > 60) {
          this.timeInterval = 2500
          this.barWidth += 1
        } else {
          this.barWidth += 1
        }
        this.addTip()
        // console.log('bar=', this.barWidth)
      }, this.timeInterval)
    },
    addTip() {
      const i = this.tipIndex || 0
      const arr = this.AndroidData || []
      if (!(arr && Array.isArray(arr) && arr.length)) {
        console.error('arr=', arr)
        return
      }
      const len = arr.length
      if (i + 1 < len) {
        this.tips.push(arr[i])
        this.tipIndex = i + 1
      }
    },
  }
}
</script>

<style scoped>
.c {margin-top: -20px; display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%;overflow: visible; position: relative; padding: 0;}
.c .des {margin-top: 30px; color: rgb(185, 179, 179); font-size: 15px;}
.progress { position: fixed; left: 30%; right: 30%; bottom: 30%; z-index: 2;
background: grey; height: 3px; border-radius: 3px; overflow: hidden;}
.progress .bar {
  position: absolute;
  left: 0; top: 0; bottom: 0; border-radius: 3px;
  background: linear-gradient(to left, grey, rgb(52, 128, 221), grey);
}
.tiplist {position: fixed; left: 10px; top: 40px; right: 30px; bottom: 10px; overflow-x: hidden; overflow-y: scroll;
  display: flex; flex-direction: column; z-index: 10;}
.tiplist .tip {line-height: 20px; font-size: 12px; color: rgb(184, 184, 139)}
</style>