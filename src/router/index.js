import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import Locations from "@/views/Locations";
import Forecast from "@/views/Forecast";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/fore',
    name: 'Forecast',
    component: Forecast
  },
  {
    path: '/loc',
    name: 'loc',
    component: Locations
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
