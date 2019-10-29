import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import axios from '@/api'
import plugin from '@/components'
Vue.use(plugin)
// import MyBread from '@/components/my-bread'
// Vue.component('my-bread', MyBread)
Vue.prototype.$http = axios
// import axios from 'axios'
// axios.default.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// export default axios
// 导入文件的时候，默认导入的是目录下的索引文件（index.js index.vue index.json）。
// @是webpack指定的路径别名  @===‘/src’   绝对路径
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// main.js的职责入口文件
// 职责1:创建根实例
// 职责2:依赖项目需要的全局资源
