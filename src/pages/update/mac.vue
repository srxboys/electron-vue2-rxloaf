<template>
  <div class="fix rx_flex rx_flex_endcenter hidden_scroller hiddenCusor" @click="goback">
    <div class="c" style="point-event:none;">
      <img src="~assets/img/iphone.png">
      <div class="progress">
        <div class="bar" :style="{width}"></div>
      </div>
      <div class="des">正在安装 <span v-show="macRemaTime> 0">, 大概需要{{macRemaTime}}分钟 </span></div>
    </div>
  </div>
</template>

<script>
import ClickGobackMixin from '@/mixins/click-goback'
import CloseWinMixin from '@/mixins/closewin'
export default {
  mixins: [ClickGobackMixin, CloseWinMixin],
  data() {
    return {
      count: 0,
      barWidth: 2,
      timer: null,
      timeInterval: 1500,

      macRemaTime: 0, // 60分钟 = 3600秒 , 90*1500 = 135000,
      // barWidth=1 =>3600/13500 = 0.026
      // 3600 - barWidth*1500 * 0.026 =
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loadProgress()
      }, 100)
    })
  },
  computed: {
    width() {
      return this.barWidth + '%'
    }
  },
  methods: {
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
        // console.log('bar=', this.barWidth)
        this.macRemaTime = Math.floor((3600 - (this.barWidth * 1500 * 0.026)) / 60)
      }, this.timeInterval)
    }
  }
}
</script>

<style>
.c {margin-top: -20px; margin-bottom: 15%; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0; width: 100% }
.c img {width: 8%; height: 8%}
.c .progress {margin-top: 10%; background: grey; min-width: 40%; max-width: 50px; height: 4px; border-radius: 4px; position: relative; overflow: hidden;}
.c .progress .bar {
  position: absolute;
  left: 0; top: 0; bottom: 0; border-radius: 4px;
  background: white;
}
.c .des {color: white; font-size: 12px; margin-top: 20px}
</style>