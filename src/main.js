import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
// 导入文件的时候，默认导入的是目录下的索引文件（index.js index.vue index.json）。
// @是webpack指定的路径别名  @===‘/src’   绝对路径
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
