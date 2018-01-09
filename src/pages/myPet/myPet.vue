<!-- 我的e宠 -->
<template>
  <div>
    <router-view/>
    <div class="myWrap">
      <header class="myWrapHeader">
        <div class="headerUp">
          <a href="###" @click="$router.back()" class="iconfont icon-dayuhao"></a>
          <router-link to="/register" class="register">注册</router-link>
        </div>
        <div class="mlogo">
          <img src="./logo.png">
        </div>
        <div class="headerDown">
          <div  @click="controlShow(false)" >
            <a href="###">普通登录</a>
            <i class="iconfont icon-icon-up" v-show="!isShow"></i>
          </div>
          <div @click="controlShow(true)" >
            <a href="###">手机动态登录</a>
            <i class="iconfont icon-icon-up" v-show="isShow"></i>
          </div>
        </div>
      </header>
      <div class="myWrapContent">
        <ul class="mform" v-show="!isShow">
          <li>
            <span class="mNameIco iconfont icon-yonghu-copy"></span>
            <input type="text" v-model="username"
                   placeholder="用户名"
                   name="username"
                   class="username">
          </li>
          <li>
            <span class="mpasswordIco iconfont icon-mima"></span>
            <input type="password" v-model="password"
                   placeholder="输入密码"
                   name="password"
                   class="password">
          </li>
        </ul>
        <ul class="mform" v-show="isShow">
          <li>
            <span class="mNumIco iconfont icon-shouji"></span>
            <input type="text" placeholder="已注册的手机号"
                   class="dttext" name="phone"></li>
          <li>
            <span class="mpasswordIco iconfont icon-mima"></span>
            <input type="text" placeholder="请输入图片内容"
                   class="dttext" name="varify">
            <span style="display:block">
              <img src="">
            </span>
          </li>
          <li>
            <span class="mpasswordIco iconfont icon-mima"></span>
            <input type="text" class="dttext"
                   placeholder="动态密码" name="code">
            <a class="get_phonepass" v-show="false">短信已发送</a>
            <a href="javascript:" class="get_phonepass">获取动态密码</a>
          </li>
        </ul>
        <div class="forget">
          <a href="https://wap.epet.com/login.html?do=findpassword">忘记密码？</a>
        </div>
        <div class="enter" @click="enter">
          <a href="###">登录</a>
        </div>
        <div class="vacancy"></div>
        <div class="collaborate">合作网站</div>
        <ul class="collaborateList">
          <li>
            <a
              href="https://passport.epet.com/Oauth.html?type=4&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
              <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
            </a>
          </li>
          <li>
            <a
              href="https://passport.epet.com/Oauth.html?type=2&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
              <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
            </a>
          </li>
        </ul>
      </div>
      <footer class="footerStance"></footer>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data () {
      return {
        isShow: false,
        username:'',
        password:''
      };
    },

    components: {},

    computed: {
      ...mapState(["users"])
    },

    mounted(){
      this.$store.dispatch("getUsers")
    },

    methods: {
      controlShow(flag){
        this.isShow = flag
      },
      enter(){
         let that = this

        this.users.forEach((user, index)=>{
          if(this.username===user.username&&this.password===user.password){
            alert("恭喜您蒙对啦")
            this.$router.back()
          }else {
            alert("猜错啦")
          }
        })
      }

    }
  }

</script>
<style lang='stylus' rel="stylesheet/stylus">
  .myWrap
    position relative
    width 100%
    height 667px
    background-color #fff
    .myWrapHeader
      height 177px
      background-image url("./myBackground.png")
      background-repeat no-repeat
      background-size 100% 100%
      .headerUp
        height 50px
        padding 0 1em
        line-height 50px
        .icon-dayuhao
          font-size 22px
          color aliceblue
        .register
          color aliceblue
          float right
      .mlogo
        height 83px
        padding: 1em 0 2em 0;
        box-sizing border-box
        img
          display block
          margin auto
          width 75px
      .headerDown
        height 44px
        background-color rgba(51, 51, 51, 0.3)
        div
          float left
          width 50%
          height 100%
          text-align center
          line-height 44px
          position relative
          a
            color aliceblue
          .icon-icon-up
            display block
            position absolute
            top 19px
            left 50%
            width 20px
            height 10px
            color aliceblue
    .myWrapContent
      .mform
        margin: 0em 4% 1em 4%
        li
          line-height 46px
          width 333px
          height 46px
          margin 0 auto
          border-bottom 1px solid #ccc
          input
            outline: none
      .forget
        height 20px
        box-sizing border-box
        padding 0 2em
        a
          float right
      .enter
        height 44px
        box-sizing border-box
        padding 0.5em 10px
        a
          display block
          height 38px
          line-height 38px
          text-align center
          border-radius 10px
          background-color #2ec975
          color aliceblue
      .vacancy
        height 120px
      .collaborate
        height 20px
        margin-top 0.5em
        text-align center
        color #ccc
      .collaborateList
        height 94px
        padding 1em 0
        box-sizing border-box
        li
          width 124px
          height 57px
          float left
          text-align center
          a
            img
              width 57px

    .footerStance
      position absolute
      bottom 0px
      left 0px
      height 56px
      background-color #fff
      z-index 11
      width 100%
</style>
