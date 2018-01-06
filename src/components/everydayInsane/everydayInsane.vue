<!-- 每日疯抢 -->
<template>
  <div>
    <div class="insaneHeader" v-if="home">
      <div class="rightImage">
        <img :src="home.datas[4].surprise_icon.image">
      </div>
      <div></div>
    </div>
    <div></div>
    {{home}}
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
      ...mapState(['home'])
    },

    mounted(){
      if(this.home){
        console.log(this.home.datas["3"])
      }
    },

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .insaneHeader
    box-sizing border-box
    width 100%
    height 60px
    padding 10px
    .rightImage
      img
        width 105px
</style>
