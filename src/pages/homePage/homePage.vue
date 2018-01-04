<!--  -->
<template>
  <div>
    <!--头部-->
    <header class="homeHeader">
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

        </div>
      </div>
      <!--头部下-->
      <div class="find_nav">

      </div>
    </header>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },

    components: {},

    computed: {},

    mounted(){
    },

    methods: {}
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
        &>input
          background-color #ddd
          width 219px
          height 25px
          border-radius 5px
          color #000
          background-image url("./search.png")
          background-repeat no-repeat
          background-size 11px 11px
          background-position center right
    //头部下
    .find_nav
      height 36px
      background-color #0000ff
</style>
