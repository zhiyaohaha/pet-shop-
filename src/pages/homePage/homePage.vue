<!--  -->
<template>
  <div>
    <!--头部-->
    <header class="homeHeader" v-if="home">
      <!--头部上-->
      <div class="clearFix">
        <div class="clearFixLeft">
          <router-link to="/dog">
            <span>狗狗站|</span>
            <span>成都</span>
            <i class="iconfont icon-daosanjiao"></i>
          </router-link>
        </div>
        <div class="clearFixMiddle">
          <!--<mt-search-->
          <!--v-model="value" class="search"-->
          <!--cancel-text="取消" placeholder="搜索">-->
          <!--</mt-search>-->
          <input type="search" placeholder="请输入" class="iconfont icon-sousuo">
        </div>
        <div class="clearFixRight">
          <a href="https://wap.epet.com/wappms/pms.html?fw=0">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
          </a>
        </div>
      </div>
      <!--头部下-->
      <div class="find_nav" ref="menuWrapper">
        <ul v-if="home" class="headerTab" :style="{width:tabLength+'px'}">
          <li v-for="(menu, index) in home.menus" :key="index" @click="optChange(index)">
            <a href="###" :class="{active:menuIndex === index}">{{menu.menu_name}}</a>
            <span v-show="menuIndex === index"
                  :style="{'width':greenAcross+'px','left':smallGreenLength+'px'}"></span>
          </li>
        </ul>
      </div>
    </header>

    <!--小狗-->
    <div class="dog">
      <dog/>
    </div>
    <!--中间-->
    <div class="homeContent" ref="homeContent" v-if="home">
      <div>
        <!--轮播广告-->
        <div class="slide">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(val, index) in home.datas[0].value" :key="index">
              <a href="###">
                <img width="100%" height="160px" :src="val.image">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--栏目菜单-->
        <div class="column" v-if="home">
          <ul>
            <li v-for="(menu, index) in home.datas[1].menus">
              <a href="###">
                <img :src="menu.image">
              </a>
            </li>
          </ul>
        </div>
        <!--小灰线-->
        <div>
          <split/>
        </div>
        <!--广告-->
        <div class="advertisingWrap">
          <div class="advertising">
            <a href="###">
              <img :src="home.datas[5].image">
            </a>
          </div>
        </div>
        <!--小灰线-->
        <div>
          <split/>
        </div>
        <!--每日疯抢-->
        <div class="everydayInsane">
          <everydayInsane/>
        </div>
        <!--小灰线-->
        <div>
          <split/>
        </div>
        <!--潮品视屏-->
        <div class="fashion">
          <div class="fashionHeader">
            <div class="leftFashion">
              <img :src="home.datas[2].value.left.img.image">
            </div>
            <div class="rightFashion">
              <a href="###">
                <img :src="home.datas[2].value.right.img.image">
              </a>
            </div>
          </div>
          <div class="fashionVideo">
            <!--视屏-->
            <videoMod :poster="home.datas[3].value.cover.image" :src="home.datas[3].value.link" />
          </div>
        </div>
        <!--底下-->
        <div class="stanceFooter"></div>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapState} from "vuex"
  import BScroll from "better-scroll"
  import split from "../../components/split/split.vue"
  import dog from "../../components/dog/dog.vue"
  import everydayInsane from "../../components/everydayInsane/everydayInsane.vue"
  import videoMod from "../../components/videoMod/videoMod.vue"
  export default {
    data () {
      return {
        menuIndex: 0,
        greenAcross: 28,
      };
    },

    components: {
      split,
      dog,
      everydayInsane,
      videoMod
    },

    computed: {
      ...mapState(["home"]),
      tabLength(){
        return 75 * this.home.menus.length
      },
      smallGreenLength(){
        return (75 - this.greenAcross) / 2
      }
    },

    mounted(){
//        发请求 和 滑动
      this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          this.menuWrapper = new BScroll(this.$refs.menuWrapper, {scrollX: true, click: true,})
          this.homeContent = new BScroll(this.$refs.homeContent, {click: true})
          this.homeContent.refresh()
          this.menuWrapper.refresh()
        })
      })
    },
    updated(){

    },
    methods: {
//     绿杠长度 确定点击事件
      optChange(index){
        let num = this.home.menus[index].menu_name.length
        this.greenAcross = 14 * num
        this.menuIndex = index
      }
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  /*头部*/
  .homeHeader
    width 100%
    height 86px
    position fixed
    top 0
    left 0
    background-color #fff
    z-index 20
    /*头部上*/
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
      /*评论logo*/
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
    /*头部下*/
    .find_nav
      width 100%
      height 36px
      .headerTab
        overflow hidden
        & > li
          float left
          width 75px
          height 36px
          text-align center
          line-height 36px
          position relative
          /*绿色*/
          & > a
            font-size 14px
            &.active
              color #00ff00
          /*小绿杠*/
          & > span
            display block
            height 1px
            background-color #00ff00
            position absolute
            bottom 0

  .dog
    position fixed
    width 41px
    height 46px
    bottom 100px
    right 0
    z-index 10

  /*内容区*/
  .homeContent
    position absolute
    width 100%
    height 100%
    top 87px
    left 0
    /*轮播*/
    .slide
      width 100%
      height 160px
      & > div
        width 100%
        height 100%
    .column
      width 100%
      height 190px
      overflow hidden
      li
        float left
        width 20%
        height 95px
        img
          width 100%
          height 100%
    .advertisingWrap
      width 100%
      height 120px
      .advertising
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .fashion
      width 100%
      height 357px
      .fashionHeader
        padding-top 10px
        padding-bottom 5px
        box-sizing border-box
        overflow hidden
        width 100%
        height height 88px
        .leftFashion
          float left
          img
            width 187.5px
        .rightFashion
          float right
          width 120px
          height 55px
          text-align right
          img
            margin-right 0
            width 60px
            height 55px
      .fashionVideo
        position relative
        width 100%
        height 211px
    .stanceFooter
      width 100%
      height 145px
</style>
