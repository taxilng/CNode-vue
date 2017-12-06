import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})