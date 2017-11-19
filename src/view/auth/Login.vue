<template>
  <div class="paper_container">
    <mu-paper class="paper" :zDepth="2">
      <img class="logo" src="../../assets/logo.png"/>
      <mu-text-field hintText="手机号" type="" icon="phone" v-model="userInfo.userName"/>
      <br/>
      <mu-text-field hintText="密码" type="password" icon="lock" v-model="userInfo.password"/>
      <br/>
      <div id="captcha">

      </div>
      <mu-raised-button label="登 录" primary @click="login" class="button"/>
      <br/>
      <mu-raised-button label="去 注 册" primary to="/signup" class="button"/>
      <br/>
      <a href="#">忘记密码</a>

    </mu-paper>
  </div>
</template>
<script>
  // import {geetest, getCode} from '@/utils/geetest'

  export default {
    data () {
      return {
        userInfo: {
          userName: '',
          password: ''
        }
      }
    },
    components: {},
    methods: {
      login () {
        /* if (getCode.captchaObj.getValidate()) {
         this.$store.dispatch('loginByPhone', this.userInfo).then(res => {
         console.log(res)
         if (res.errorCode === 1) {
         console.log('login success')
         this.$store.commit('SET', {
         type: 'loginTag',
         data: true
         })
         this.$router.push('/index')
         } else if (res.errorCode === 0) {
         alert('密码不符合规则')
         }
         }, error => {
         console.log(error)
         })
         } else {
         alert('请先完成人机验证！')
         } */
        this.$store.commit('changeLoadState', true)
        this.$store.dispatch('loginByPhone', {
          userName: this.userInfo.userName,
          password: this.userInfo.password
        }).then(res => {
          if (res.status_code !== 1) {
            console.log(res)
            console.log('login success')
            this.$store.commit('SET', {
              type: 'info',
              data: res.data
            })
            this.$store.commit('changeLoadState', false)
            this.$router.push('/index')
          }
        }, error => {
          console.log(error)
        })
      }
    },
    created () {
      // geetest(window)
      // getCode.init()
      console.log('login page')
    },
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .button {
    width: 256px
  }

  .paper_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    background-color: rgb(246, 241, 241)
  }

  #captcha {
    margin: 10px 0 10px 0;
  }

  .paper {
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;

    .logo {
      width: 100px;
    }

  }
</style>
