// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入reset.css
import 'styles/reset.css'
import 'styles/border.css'

// // 导入fastclick
// import fastClick from 'fastclick'


// 导入iconfont
import 'styles/iconfont.css'
// 导入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'



Vue.config.productionTip = false

// // 将fastclick绑定到body上
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
