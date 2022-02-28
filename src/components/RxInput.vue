<!-- 未封装完 -->
<template>
  <div class="rxinput">
    <div class="rxinput-prefix">
      <div v-if="hasResetLabel">
        <slot name="reset-label"></slot>
      </div>
      <slot name="label"></slot>
    </div>
    <div class="rxinput-primary">
      <input
        class="rxinput_inner"
        v-model="currentValue"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :maxlength="max"
        :accept="accept"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        @change="change"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input"
      />
    </div>
    <div class="rxinput-suffix">
      <div class="clear _s" v-if="currentValue && showClear" @click="clear"></div>
      <div class="warn _s" v-if="!novalidate && !valid && validateType === 'warn'">valid - warn</div>
      <div class="succ _s" v-if="!novalidate && !valid && validateType === 'succ'">valid - succ</div>
      <div class="fail _s" v-if="!novalidate && !valid && validateType === 'fail'">valid - fail</div>
      <div v-if="hasResetRight">
        <slot name="reset-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Debounce from 'lodash.debounce'
export default {
  props: {
    title: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: String,
    value: [String, Number],
    showPassword: { type: Boolean, default: false },
    min: Number,
    max: Number,
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String, //  china-mobile / mobile / bank / vik
    textAlign: String, // text-agin: `center / left / right`
    accept: String,
    iconType: String,
    debounce: Number,
    required: Boolean,
    novalidate: Boolean,
    placeholderAlign: String,
    showClear: { type: Boolean, default: true },
    autocomplete: { type: String, default: 'off' },
    autocapitalize: { type: String, default: 'off' },
    autocorrect: { type: String, default: 'off' },
    spellcheck: { type: String, default: 'false' },
  },
  data () {
    return {
      currentValue: '',
      passwordVisible: false,

      isFocus: false,
      hasResetLabel: false,
      hasResetRight: false,
      valid: true,
      validateType: '', // '', warn, succ, fail
    }
  },
  created () {
    this.currentValue = (this.value === undefined || this.value === null) ? '' : (this.mask ? this.maskValue(this.value) : this.value)

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false
    }

    if (this.debounce) {
      this._debounce = Debounce(() => {
        this.$emit('on-change', this.currentValue)
      }, this.debounce)
    }
  },
  computed: {
    pattern () {
      if (this.type === 'number' || this.keyboard === 'china-mobile') {
        return '[0-9]*'
      }
      return null
    },
    inputStyle () {
      if (this.textAlign) {
        return { textAlign: this.textAlign }
      }
      return null
    },
  },
  beforeMount () {
    if (this.$slots && this.$slots['reset-label']) {
      this.hasResetLabel = true
    }
    if (this.$slots && this.$slots['reset-right']) {
      this.hasResetRight = true
    }
  },
  beforeDestroy () {
    if (this._debounce) {
      this._debounce.cancel()
    }
    window.removeEventListener('resize', this.scrollIntoView)
  },
  methods: {
    reset (value = '') {
      this.currentValue = value
      this.valid = true
    },
    clear () {
      this.currentValue = ''
      this.focus()
      this.$emit('on-click-clear')
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    },
    change(e) {
      this.$emit('change', e)
    },
    focusHandler (e) {
      this.$emit('on-focus', this.currentValue, e)
      this.isFocus = true
      setTimeout(() => {
        // 因为有1秒的延迟，如果切换了页面，input已经不存在，所以加个判断
        !this.$refs.input || this.$refs.input.scrollIntoViewIfNeeded(false)
      }, 1000)
    },
    onBlur (e) {
      this.validate()
      this.isFocus = false
      this.$emit('on-blur', this.currentValue, e)
    },
    onKeyUp (e) {
      if (e.key === 'Enter') {
        e.target.blur()
        this.$emit('on-enter', this.currentValue, e)
      }
    },
    validate () {
    },
  },
  watch: {
    value (val) {
      if (val !== this.currentValue) {
        this.currentValue = val
      }
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
      if (this._debounce) {
        this._debounce()
      } else {
        this.$emit('on-change', newVal)
      }
    },
  }
}
</script>

<style scoped>
.rxinput {
  display: flex;
  flex-wrap: nowrap;
  padding: 5px;
  border: 1px solid;
  overflow: hidden;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
}
.rxinput-primary { flex: 1; height: 35px; margin-right: 5px;}
.rxinput_inner { border: 0; outline: 0; appearance: none; height: 35px; width: 100%}
.rxinput-suffix {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.rxinput-suffix ._s {
  width: 21px; height: 21px;
  margin-left: 5px;
  background-size: 21px;
  background-repeat: no-repeat;
}
.rxinput-suffix .clear {background-image: var(--rxinput-icon-clear); }
.rxinput-suffix .warn {background-image: var(--rxinput-icon-forbidden); }
.rxinput-suffix .succ {background-image: var(--rxinput-icon-success); }
.rxinput-suffix .fail {background-image: var(--rxinput-icon-fail); }
</style>