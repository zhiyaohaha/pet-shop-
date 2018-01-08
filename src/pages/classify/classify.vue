
<template>
  <div>
    <header class="classifyHeader">
      <div class="classifyPage">
        <router-link to="/classify/classifyPage">
          <span class="classifyP1">分类</span>
        </router-link>
      </div>
      <div class="brand">
        <router-link to="/classify/brand">
          <span class="classifyP2">品牌</span>
        </router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {

  },

  mounted(){

  },

  methods: {}
}

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .router-link-active
    color: #F00
    .classifyP1,.classifyP2
      border-bottom 1px solid red
  .classifyHeader
    position fixed
    top 0px
    left 0px
    width 100%
    height 40px
    box-sizing border-box
    border-bottom 1px solid #ccc
    background-color #fff
    padding 0 15px
    z-index 1
    .classifyPage,.brand
      width 172.5px
      height 100%
      float left
      text-align center
      line-height 45px
      a
        display block
        padding 0 5%
        font-size 13px
        font-weight bold
        .classifyP1
          float right
          height 39px
        .classifyP2
          height 39px
          float left

</style>
