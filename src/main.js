import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// import RxdialogPlugin from 'vue-plugin-rxdialog'
// import 'vue-plugin-rxdialog/lib/rxdialog.css'
// Vue.use(RxdialogPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created() {
    console.log('main.js -> create')
  }
}).$mount('#app')
