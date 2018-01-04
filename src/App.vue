<!-- app -->
<template>
  <div>
    <footer class="footerTab">
      <div class="tabItem">
        <router-link to="/homePage">首页</router-link>
      </div>
      <div class="tabItem">
        <router-link to="/classify">分类</router-link>
      </div>
      <div class="tabItem">
        <router-link to="/myPet">购物车</router-link>
      </div>
      <div class="tabItem">
        <router-link to="/shopC">我的E宠</router-link>
      </div>
    </footer>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='stylus' rel="stylesheet/stylus">
.footerTab
  width 100%
  height 40px
  background-color #333
  border-top 1px solid
  position fixed
  bottom 0
  left 0
  .tabItem
    width 25%
    height 100%
    background-color #fff
    border-right 1px solid
</style>
