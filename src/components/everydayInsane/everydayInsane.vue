<!-- 每日疯抢 -->
<template>
  <div>

    <div class="insaneHeader">
      <div class="leftImage">
        <img :src="everydayInsane.surprise_icon.image">
      </div>
      <div class="centreHeader">
        {{everydayInsane.title}}
      </div>
      <div class="leftHeader">
        <!--倒计时-->
        <div class="countDown">
          <countDown :endTime="countDown" endText="已经结束了"/>
        </div>

      </div>
      <div class="rightImage">
        <a href="###">
          <img :src="everydayInsane.right_image.image">
        </a>
      </div>
    </div>
    <div class="good" ref="goodWrapper">
      <ul class="goodList" :style="{width:goodListW+'px'}">
        <li v-for="(good, index) in everydayInsane.goods" :key="index">
          <img :src="good.image.image">
          <div class="listPrice">
            <span>￥</span>
            <span>{{good.sale_price}}</span>
          </div>
          <div class="discount">
            <span>{{good.little_price}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import countDown from "../countDown/countDown.vue"
  import BScroll from "better-scroll"
  import {mapState} from "vuex"
  export default {
    data () {
      return {}
    },

    components: {
      countDown
    },

    computed: {
      ...mapState(['home']),
      goodListW(){
        return this.everydayInsane.goods.length * 109
      },

      everydayInsane(){
        return this.home && this.home.datas[4]
      },
      countDown(){
        let msd = this.everydayInsane.time
        return msd * 1.1 + ""
      }
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      /*countDown(value) {
       console.log('111')
       this.countDown = this.MillisecondToDate(value)
       }*/
    },

    mounted(){
      this.$nextTick(() => {
        new BScroll(this.$refs.goodWrapper, {
          scrollX: true,
          click: true,
        })
      })
    },

    methods: {
      /*写错的倒计时*/
      /* leftTimer(timeDifference){
       function checkTime(i) { //将0-9的数字前面加上0，例1变为01
       if (i < 10) {
       i = "0" + i
       }
       return i
       }

       //        clearInterval(timer)
       let leftTime = timeDifference //计算剩余的毫秒数
       let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10) //计算剩余的小时
       let minutes = parseInt(leftTime / 1000 / 60 % 60, 10)//计算剩余的分钟
       let seconds = parseInt(leftTime / 1000 % 60, 10)//计算剩余的秒数
       hours = checkTime(hours)
       minutes = checkTime(minutes)
       seconds = checkTime(seconds)
       //        let timer = setInterval("this.leftTimer(this.timeDifference)", 1000)
       let countDown = hours + ":" + minutes + ":" + seconds
       return countDown
       }*/
    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .insaneHeader
    box-sizing border-box
    width 100%
    height 60px
    padding 10px
    .leftImage
      float left
      img
        width 105px
    .centreHeader
      width 65px
      height 20px
      float left
      font-size 13px
      margin-left 10px
      line-height 20px
      margin-top 1px
    .leftHeader
      width 83px
      height 40px
      margin-left 5px
      float left
      .countDown
        width
        font-size 15px
        margin-top 3px
    .rightImage
      float left
      position relative
      width 85px
      height 55px
      img
        position absolute
        right -21px
        bottom 0
        height 100%

  .good
    width 100%
    height 131px
    .goodList
      height 100%
      li
        float right
        height 100%
        width 99px
        margin-right 10px
        text-align center
        img
          width 85px
        .listPrice
          color #ff0000
        .discount
          color #666666
</style>
