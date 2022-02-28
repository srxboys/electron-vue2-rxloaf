<template>
  <div class="rxlist wh">
    <div class="rxlc wh">
    <div class="t" v-for="(t,i) in array" :key="'t-'+i" @click="click(t)" :style="getStyle(i)">
      <div class="index">{{ t.index }}</div>
      <div class="valid" :class="{succ: !!t.valid}">{{t.valid ? '是' : '否' }}</div>
      <div class="text cursor" @click.stop="toCopy(t.text)">{{ t.text ? t.text : '' }}</div>
      <div class="time">{{ t.time ? t.time : '' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    array: { type: Array, default() { return [] } }
  },
  methods: {
    click(t) {
      const value = t.index + ' - ' + t.text + ' ---- ' + t.time
      const that = this
      this.$rxdialog && this.$rxdialog.toast.show({
        text: value,
        onHide() {
          that.$emit('click')
        },
      })
    },
    getStyle(i) {
      let tStyle = ''
      if (i % 2 === 0) {
        tStyle = 'background: #bbb'
      } else {
        tStyle = 'background: #eee'
      }
      return tStyle
    },
    toCopy(text) {
      console.log('text=', text)
    }
  }
}
</script>

<style scoped>
.wh {padding: 0; width: 100%; max-height: 600px;}
.rxlist {overflow-x: hidden; overflow-y: scroll;}
.rxlist .rxlc{ display: flex; flex-wrap: nowrap; flex-direction: column; max-height: auto;}
.t {padding: 10px 20px; display: flex; align-items: center; border-radius: 4px;}
.t .index {color: blue;}
.t .valid {color: red; padding: 0 10px;}
.t .valid.succ { color: green }
.t .text {color: #000; margin: 0 20px; flex: 1;}
.t .time {color: #555; text-align: right;}
</style>