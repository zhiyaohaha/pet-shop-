import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const homePage = () => import('../pages/homePage/homePage.vue')
const classify = () => import('../pages/classify/classify.vue')
const myPet = () => import('../pages/myPet/myPet.vue')
const brand = () => import('../pages/brand/brand.vue')
const shopC = () => import('../pages/shopC/shopC.vue')
const dog = () => import('../pages/dog/dog.vue')
const classifyPage = () => import('../pages/classifyPage/classifyPage.vue')

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/homePage"
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: "",
          redirect: "classifyPage"
        },
        {
          path: 'classifyPage',
          component: classifyPage
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/homePage',
      component: homePage,
      children: [
        {
          path: 'dog',
          component: dog
        }
      ]
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
