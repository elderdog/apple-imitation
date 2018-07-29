// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/icon/iconfont.css';
import Service from './assets/js/Service';
import './assets/js/mock';
import * as api from './assets/js/api';

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 不能传参，否则所有的vue实例都用一个接口了
Vue.prototype.$service = new Service();
Vue.prototype.$api = api;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
