import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import News from "./components/News";
import Pages from "./components/Pages";
import NewsPost from "./components/News-post";
import PageNotFound from "./components/erro404";

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('News', News)
Vue.component('Pages', Pages)
Vue.component('NewsPost', NewsPost)
Vue.component('PageNotFound', PageNotFound)

const router = new VueRouter({
  routes: [
    { path: '/', component:  Pages},
    { path: '/news', component:  News},
    { path: '/news/:id', component:  NewsPost},
    { path: '*', component:  PageNotFound}
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
