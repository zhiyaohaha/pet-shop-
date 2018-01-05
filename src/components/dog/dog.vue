<!--  -->
<template>
  <div>
    <div class="dogCut"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
  }
</script>
<style lang='stylus' rel="stylesheet/stylus">
  url = "godog.png"
  .dogCut
    width 41px
    height 46px
    background-image url(url)
    background-repeat no-repeat
    background-size 200% 100%
    background-position 100% center
    animation:myfirst 2.5s steps(2) infinite;
  @keyframes myfirst
    0%
      background-position 0% center
    100%
      background-position 205% center
</style>
