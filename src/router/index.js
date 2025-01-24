import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import News from "@/views/news/index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
