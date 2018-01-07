<template>
  <div>
    <div class="imgWrap" @click.stop="vidShow">
      <img src="./play.png" v-show="isShow">
    </div>
    <video @click.stop="vidShow" :poster="poster" ref="videoC"
           :src="src" :controls="controls">
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>
<script>
  export default {
      props:["poster","src"],
    data () {
      return {
        isShow: true,
        controls: false
      };
    },

    components: {},

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
</style>
