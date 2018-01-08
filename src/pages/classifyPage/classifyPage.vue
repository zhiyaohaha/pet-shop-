<!-- 分类 -->
<template>
  <div>

    <div class="classifyPageWrap">
      <div class="classifyPageHeader"></div>
      <div class="classifyPageLeft">
        <ul class="classifyList" v-if="classify">
          <li v-for="(category, index) in classify.categorys" :key="index">
            <span>{{category.name}}</span>
            <ul>

            </ul>
          </li>
        </ul>
      </div>
    </div>
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
  .classifyPageHeader
    width 100%
    height 40px
  .classifyPageWrap
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    .classifyPageLeft
      width 70px
      height 100%
      .classifyList
        width 100%
        border-right 1px solid #ccc
        li
          height 50px
          text-align center
          line-height 50px
          font-size 13px
          border-bottom 1px solid #ccc
</style>
