// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Search, Swipe, SwipeItem, MessageBox} from 'mint-ui'
import store from './store'
import "../static/reset.css"
import "./mock/mockServer"


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);
Vue.component(MessageBox.name, MessageBox);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h=>h(App),
  router,
  store
})
