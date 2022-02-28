import { DeviceIsElectron } from '@/utils/utils'

const ClickGobackMixin = {
  data() {
    return {
      clickTimer: null,
      clickCount: 0,
    }
  },
  methods: {
    goback() {
      // Custom double click event.
      if (this.clickTimer && this.clickCount === 0) {
        !DeviceIsElectron && this.$router.back()
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
  }
}

export default ClickGobackMixin