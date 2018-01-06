<!-- 每日疯抢 -->
<template>
  <div>
    <div class="insaneHeader">
      <div class="rightImage">
        <img :src="everydayInsane.surprise_icon.image">
      </div>
      <div class="centreHeader">
        {{everydayInsane.title}}
      </div>
      <div class="leftHeader">
        <!--倒计时-->
        <countDown v-if="home" :endTime="countDown" endText="已经结束了"/>
      </div>
    </div>
    <div></div>
    {{everydayInsane}}
  </div>
</template>

<script>
  import countDown from "../countDown/countDown.vue"
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
      everydayInsane(){
        return this.home && this.home.datas[4]
      },
      countDown(){
        let time = (new Date()).valueOf()
        let msd = this.everydayInsane.time
        let timeDifference = time - msd*1000
        return timeDifference*100+""
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
    .rightImage
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
</style>
