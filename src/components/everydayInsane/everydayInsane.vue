<!-- 每日疯抢 -->
<template>
  <div>{{home}}</div>
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

    mounted(){},

    methods: {}
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
