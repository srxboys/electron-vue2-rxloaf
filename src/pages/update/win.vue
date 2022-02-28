<template>
  <div class="fix win rx_flex rx_flex_center hiddenCusor" @click="goback">
    <div class="c">
      <win-loading />
      <div>正在进行更新 {{ updateCount }}%</div>
      <div>请保持计算机打开状态。</div>
    </div>
    <div class="bt rx_flex rx_flex_center">计算机可能会重启几次</div>
  </div>
</template>

<script>
import TimerMixin from '@/mixins/timer'
import ClickGobackMixin from '@/mixins/click-goback'
import WinLoading from '@/components/WinLoading'
export default {
  components: { WinLoading },
  mixins: [TimerMixin, ClickGobackMixin],
  data() {
    return {
      count: 0,
      updateCount: 2,
    }
  },
  created() {
    this.setTimerInterval(2000)
  },
  methods: {
    onCountDown() {
      // console.log('onCountDown-----')
      let c = this.updateCount
      if (c + 1 > 90) {
        if (this.count > 3) {
          c = 2
          this.count = 0
        } else {
          this.count += 1
        }
      } else if (c + 1 > 60) {
        c = c + 1
      } else {
        const rand = Math.round(Math.random() * 6)
        c = c + rand
      }
      console.log('c=', c)
      this.updateCount = c
    }
  }
}
</script>

<style scoped>
.win {color: white; margin-top: -40px;}
.win .c {text-align: center;}

.bt {position: absolute; left: 0; right: 0; bottom: 10%;}
</style>