<template>
  <div class="page hiddenCusor" @click="click">
    <div class="c" style="point-event:none;">
      <img src="~assets/img/iphone.png">
      <div class="progress">
        <div class="bar" :style="{width}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TimerMixin from '@/mixins/timer'
export default {
  mixins: [TimerMixin],
  data() {
    return {
      count: 0,
      barWidth: 2,

      clickTimer: null,
      clickCount: 0,
    }
  },
  computed: {
    width() {
      return this.barWidth + '%'
    }
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
    onCountDown() {
      if (this.barWidth + 1 > 90) {
        if (this.count > 3) {
          this.barWidth = 2
          this.count = 0
        } else {
          this.count += 1
        }
      } else if (this.barWidth + 1 > 60) {
        this.barWidth += 1
      } else {
        this.barWidth += 1
      }
    }
  }
}
</script>

<style scoped>
.c {margin-top: -20px; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0; width: 100% }
.c .progress {margin-top: 35px; background: grey; width: 60%; height: 4px; border-radius: 4px; position: relative; overflow: hidden;}
.c .progress .bar {
  position: absolute;
  left: 0; top: 0; bottom: 0; border-radius: 4px;
  background: white;
}
</style>