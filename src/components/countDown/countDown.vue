<template>
  <span :endTime="endTime" :endText="endText">
      {{content}}
  </span>
</template>
<script>
  export default {
    data(){
      return {
        content: '',
      }
    },
    props:{
      endTime:{
        type: String,
        default :''
      },
      endText:{
        type : String,
        default:'已结束'
      },
    },
    mounted () {
      this.countdowm(this.endTime)
    },
    methods: {
      countdowm(timestamp){
        let timer = setInterval(()=>{
          let nowTime = new Date();
          let endTime = new Date(timestamp * 1000);
          let t = endTime.getTime() - nowTime.getTime();
          if(t>0){
            let hour=Math.floor((t/3600000)%24);
            let min=Math.floor((t/60000)%60);
            let sec=Math.floor((t/1000)%60);
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            let format = '';
            if(hour > 0 ){
              format = `${hour}:${min}:${sec}`;
            }
            if(hour <= 0){
              format =`${min}:${sec}`;
            }
            this.content = format;
          }else{
            clearInterval(timer);
            this.content = this.endText;
          }
        },1000);
      }
    }
  }
</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>
