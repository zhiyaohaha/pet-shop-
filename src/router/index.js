import Vue from 'vue'
import Router from 'vue-router'
import classify from '../pages/classify/classify.vue'
import homePage from '../pages/homePage/homePage.vue'
import myPet from '../pages/myPet/myPet.vue'
import shopC from '../pages/shopC/shopC.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/homePage"
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/homePage',
      component: homePage
    },
    {
      path: '/myPet',
      component: myPet
    },
    {
      path: '/shopC',
      component: shopC
    }
  ]
})
