<!-- 分类 -->
<template>
  <div>
    <div class="classifyPageWrap">
      <div class="classifyPageHeader"></div>
      <div class="classifyPageLeft" ref="classifyPageLeft" v-if="classify">
        <ul class="classifyList">
          <li v-for="(category, index) in classify.categorys" :class="{active:rightIndex===index}"
              @click="countIndex(index)" :key="index">
            <span>{{category.name}}</span>
          </li>
        </ul>
      </div>
      <div class="classifyPageRight" v-if="classify" ref="classifyPageRight">
        <div class="classifyDetailsWrap" :class="{active:classify.categorys[rightIndex].value.cate_list.length>1}">
          <classifyDetails v-for="(cate, index) in classify.categorys[rightIndex].value.cate_list" :key="index" :cate="cate"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import classifyDetails from "../../components/classifyDetails/classifyDetails.vue"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        rightIndex:0,
        dogFood:null
      };
    },

    components: {
      classifyDetails
    },

    computed: {
      ...mapState(["classify"]),

    },

    mounted(){
      this.$store.dispatch("getClassify", () => {
        this.$nextTick(() => {
          new BScroll(this.$refs.classifyPageLeft, {
            click: true,
          })
          this.classifyPageRightWrap = new BScroll(this.$refs.classifyPageRight, {click: true,})
          this.classifyPageRightWrap.refresh()
        })
      })
    },

    methods: {

      /*dogFoodCount(){
        return this.classify.categorys.forEach((category, index)=> {
          this.dogFood = category
        })
      },*/
      countIndex(index){
        this.rightIndex = index
      }

    }
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
    .classifyPageHeader
      width 100%
      height 40px
    .classifyPageLeft
      width 70px
      height 90%
      .classifyList
        width 100%
        border-right 1px solid #ccc
        padding-bottom 55px
        li
          height 50px
          text-align center
          line-height 50px
          font-size 13px
          border-bottom 1px solid #ccc
          &.active
            background-color #ccc
    .classifyPageRight
      position absolute
      padding-top 50px
      height 100%
      top 0px
      right 0px
      width 300px
      .classifyDetailsWrap
        &.active
          height 850px
</style>
