<!-- 品牌 -->
<template>
  <div>
    <header class="brandStance"></header>
    <div class="brandWrap" ref="brandWrap" v-if="brands">
      <div class="listWrap">
        <ul class="brandList" v-for="(oneBrand, index) in brands.brand" :key="index">
          <h2 class="brandsTitle">——{{oneBrand.title}}——</h2>
          <li v-for="(anList, index) in oneBrand.list">
            <div>
              <img :src="anList.logo">
            </div>
            <p>{{anList.name}}</p>
            <p>{{anList.address}}</p>
          </li>
        </ul>
      </div>
      <footer class="footerS">

      </footer>
    </div>

  </div>

</template>

<script>
  import {mapState} from "vuex"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {};
    },

    components: {},

    computed: {
      ...mapState(['brands'])
    },

    mounted(){
      this.$store.dispatch("getBrand", () => {
        this.$nextTick(() => {
          new BScroll(this.$refs.brandWrap, {
            click: true
          })
        })
      })
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .brandStance
    width 100%
    height 40px

  .brandWrap
    width 100%
    height 667px
    .listWrap
      padding-bottom 100px
      .brandList
        width 100%
        overflow hidden
      .brandsTitle
        text-align center
        width 100%
        height 39px
        line-height 39px
      li
        float left
        width 121px
        height 107px
        div
          box-sizing border-box
          width 111px
          height 62px
          padding 10px 10px
          img
            width 100px
        p
          width 100px
          text-align center


</style>
