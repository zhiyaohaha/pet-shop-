<!--  -->
<template>
  <div>
    <!--头部-->
    <header class="homeHeader" v-if="home">
      <!--头部上-->
      <div class="clearFix">
        <div class="clearFixLeft">
          <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
            <span>狗狗站|</span>
            <span>成都</span>
            <i class="iconfont icon-daosanjiao"></i>
          </a>
        </div>
        <div class="clearFixMiddle">
          <input type="search" placeholder="请输入" class="iconfont icon-sousuo">
        </div>
        <div class="clearFixRight">
          <a href="https://wap.epet.com/wappms/pms.html?fw=0">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
          </a>
        </div>
      </div>
      <!--头部下-->
      <div class="find_nav">
        <ul class="headerTab" :style="{width:tabLength+'px'}">
          <li v-for="(menu, index) in home.menus" :key="index"
              @click="changeColor(index)" :class="{active:isColor}">
            <a href="###">{{menu.menu_name}}</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default {
    data () {
      return {
        isColor:false
      };
    },

    components: {

    },

    computed: {
      ...mapState(["home"]),

      tabLength(){
        return 75*this.home.menus.length
      }
    },

    mounted(){
    },

    methods: {
      changeColor(index){

      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  //头部
  .homeHeader
    width 100%
    height 86px
    position fixed
    top 0
    left 0
  //头部上
    .clearFix
      box-sizing border-box
      width 100%
      height 50px
      padding 5px 10px
      border-bottom 1px solid #999
      .clearFixLeft
        float left
        font-size 14px
        width 95px
        height 100%
        line-height 40px
        text-align center
        .icon-daosanjiao
          width 8px
          height 8px
          font-size 8px
      /*搜索框*/
      .clearFixMiddle
        text-align center
        line-height 40px
        float left
        & > input
          background-color #ddd
          width 219px
          height 25px
          border-radius 5px
          color #000
          background-image url("./search.png")
          background-repeat no-repeat
          background-size 11px 11px
          background-position center right
    //评论logo
      .clearFixRight
        float left
        width 35px
        height 40px
        text-align center
        line-height 50px
        margin-right 0
        & > a
          display block
          float right
          width 25px
          height 25px
          & > img
            width 25px
            height 25px
  //头部下
    .find_nav
      height 36px
      .headerTab
        overflow hidden
        & > li
          float left
          width 75px
          height 36px
          text-align center
          line-height 36px
          //绿色
          &.active
            a
              color #00ee00
          a
            font-size 16px

</style>
