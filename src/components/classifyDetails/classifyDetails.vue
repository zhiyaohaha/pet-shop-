<!--  -->
<template>
  <div>
    <ul class="rightList" id="box">
      <div class="title">
        {{cate.title}}
      </div>
      <li class="cateDerail" v-for="(ca) in cate.list">
        <img :src="ca.photo">
        <img :src="ca.logo">
        <p>{{ca.name}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    props: ["cate"],
    data () {
      return {};
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
  .rightList
    overflow hidden
    .title
      height 19px
      background-color #eee
      line-height 19px
      border-bottom 1px solid #ccc
    .cateDerail
      float left
      width 97px
      height 117px
      img
        width 86px
      p
        text-align center
        margin-top -10px
        height 20px
        line-height 20px
</style>
