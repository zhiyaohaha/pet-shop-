<!-- app -->
<template>
  <div>
    <router-view/>
    <footer class="footerTab">
      <div class="tabItem">
        <router-link to="/homePage">
          <span class="iconfont icon-shop2"></span>
          <br>
          <span>首页</span>
        </router-link>
      </div>
      <div class="tabItem">
        <router-link to="/classify">
          <span class="iconfont icon-fenleisousuo"></span>
          <br>
          <span>分类</span>
        </router-link>
      </div>
      <div class="tabItem">
        <router-link to="/myPet">
          <span class="iconfont icon-gouwuche"></span>
          <br>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="tabItem">
        <router-link to="/shopC">
          <span class="iconfont icon-morentupian_xiaolian"></span>
          <br>
          <span>我的E宠</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    components: {

    },

    computed: {

    },

    mounted(){

    },

    methods: {}
  };
</script>
<style lang='stylus' rel="stylesheet/stylus">
  .footerTab
    width 100%
    height 55px
    background-color #fff
    border-top 1px solid #999
    position fixed
    bottom 0
    left 0
    z-index 10
    .tabItem
      float left
      width 25%
      height 100%
      background-color #fff
      text-align center
      & > a
        font-size 15px
        display: block;
        margin-top: 7px;
        &.router-link-active
          color #00ffff
        .iconfont
          font-size 30px
</style>
