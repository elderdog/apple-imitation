import Vue from 'vue';
import Router from 'vue-router';

const NotFound = resolve => {require(['@/components/common/Error_404.vue'], resolve)};
const Home = resolve => {require(['@/components/pages/Home.vue'], resolve)};
const Mac = resolve => {require(['@/components/pages/Mac.vue'], resolve)};

Vue.use(Router);

export default new Router({
    routes: [
        {path: '*', redirect: '/404'},
        {path: '/404', name: 'error_404', component: NotFound},
        {path: '/', name: 'home', component: Home},
        {path: '/mac', name: 'mac', component: Mac}
    ]
})
