
<template>
  <div>
    <header class="classifyHeader">
      <div ></div>
      <div >
        <router-link to="/classify/brand">品牌</router-link>
        <router-link to="/classify/classifyPage">分类</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from "vuex"
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
    ...mapState(["classify"])
  },

  mounted(){
    this.$store.dispatch("getClassify")
  },

  methods: {}
}

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .classifyHeader
    position fixed
    top 0px
    left 0px
    width 100%
    height 40px
    box-sizing border-box
    padding 0 15px
</style>
