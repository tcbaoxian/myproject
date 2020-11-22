import Vue from 'vue'
import App from './App.vue'

//false不展示提示信息（开发阶段为false），发布阶段改为true，用处不是特别大
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
