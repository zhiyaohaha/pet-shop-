<template>
  <div>
    <div class="fashionHeader" v-if="letfImg">
      <div class="leftFashion">
        <img :src="letfImg">
      </div>
      <div class="rightFashion">
        <a href="###">
          <img :src="rightImg">
        </a>
      </div>
    </div>
    <!--如果VideoShow穿过啦为true, 那显示视屏，为false，显示图片-->
    <div class="fashionVideo" v-if="videoSrc">
      <div class="imgWrap" @click.stop="vidShow">
        <img src="./play.png" v-show="isShow">
      </div>
      <video @click.stop="vidShow" :poster="videoSrc.value.cover.image" ref="videoC"
             :src="videoSrc.value.link" :controls="controls">
        您的浏览器不支持 video 标签。
      </video>
      <div class="videoFooter">
        <div>{{videoSrc.value.title}}</div>
        <div>
          <span>
            <img width="10px" :src="videoSrc.value.visit_img.image">
            {{videoSrc.value.visit}}
          </span>
          <span> | {{videoSrc.value.time}}</span>
        </div>
      </div>
    </div>
    <div class="advertising" v-if="advertisingImgs"
         v-for="(advertisingImg, index) in advertisingImgs" :key="index">
      <a href="###">
        <img :src="advertisingImg">
      </a>
    </div>
  </div>
</template>
<script>
  import split from "../split/split.vue"
  export default {
    props: [
      "videoSrc",
      "letfImg",
      "rightImg",
      "advertisingImgs",
    ],
    data () {
      return {
        isShow: true,
        controls: false
      };
    },

    components: {
      split
    },

    computed: {},

    mounted(){
    },

    methods: {
      vidShow(){
        this.isShow = !this.isShow
        this.controls = !this.controls
        this.controls ? this.$refs.videoC.play() : this.$refs.videoC.pause()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
    .imgWrap
      position absolute
      width 100px
      height 140px
      left 50%
      top 50%
      margin-left -50px
      margin-top -50px
      z-index 1
      img
        width 100px
    video
      width 100%
      height 100%
    .videoFooter
      width 100%
      height 58px
      padding 10px
      box-sizing border-box
      font-size 12px
      div
        text-align center
        line-height 19px
        height 19px
  .advertising
    width 100%
    height 160px
    img
      width 100%
</style>
