const TimerMixin = {
  data() {
    return {
      _timer: null,
      _timeInterval: 1650,
    }
  },
  created() {
    setTimeout(() => {
      this.__startTimer()
    }, 100)
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.__startTimer()
      }, 100)
    })
  },
  beforeDestroy() {
    this.__stopTimer()
  },
  methods: {
    setTimerInterval(interval) {
      this._data._timeInterval = interval
    },
    // start
    __startTimer() {
      this.__stopTimer()
      // console.log('this=', this)
      let interval = this._data._timeInterval || 1500
      const rand = Math.round(Math.random() * 10000)
      interval = interval + rand
      // console.log('interval=', interval)
      this._timer = setTimeout(() => {
        if (this.onCountDown && typeof this.onCountDown === 'function') {
          this.onCountDown()
        }
        this.__startTimer()
      }, interval)
    },
    // stop
    __stopTimer() {
      clearTimeout(this._timer)
      this._timer = null
    }
  }
}

export default TimerMixin