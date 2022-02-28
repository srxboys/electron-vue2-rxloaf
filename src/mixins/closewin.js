import { DeviceIsElectron } from '@/utils/utils'

const CloseWinMixin = {
  created() {
    if (DeviceIsElectron) {
      // this.__addCanClose()
    }
  },
  methods: {
    __addCanClose() {
      window.onbeforeunload = (e) => {
        console.log('I do want to be closed, e=', e)
        e.returnValue = undefined
      }
    }
  }
}

export default CloseWinMixin