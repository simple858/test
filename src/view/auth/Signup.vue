<template>
  <div class="paper_container">
    <mu-paper class="paper" :zDepth="2">
      <img class="logo" src="../../assets/logo.png"/>
      <mu-text-field hintText="手机号" type="" icon="phone" v-model="cellphone"/>
      <mu-text-field hintText="密码" type="password" icon="lock" v-model="password"/>
      <mu-text-field hintText="确认密码" type="password" icon="lock" v-model="rePwd"/>

      <br/>
      <mu-checkbox label="确认并同意用户条款" v-model="agreeTermsheet"/>
      <br/>

      <!--验证码-->
      <!--<div class="captcha_action">-->
        <!--<mu-text-field label="请填写验证码" labelFloat style="width: 60%"/>-->
        <!--<mu-raised-button label="获取验证码" class="demo-raised-button" primary/>-->
      <!--</div>-->
      <mu-raised-button label="注 册" primary @click="signup" style="width: 80%;"/>
    </mu-paper>

    <mu-toast v-if="toast" :message="toastMessage" @close="hideToast"/>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        cellphone: '',
        password: '',
        rePwd: '',
        agreeTermsheet: false,
        toast: false,
        toastMessage: ''
      }
    },
    components: {},
    methods: {
      signup () {
        if (this.agreeTermsheet) {
          if (this.password === this.rePwd) {
            let {cellphone, password, agreeTermsheet} = this
            this.$store.dispatch('signupByPhone', {cellphone, password, agreeTermsheet}).then(res => {
              //  if(res.errorCode === 0){}
              console.log(res)
              this.$store.commit('SET', {
                type: 'info',
                data: res.data
              })
              this.$router.push('/index')
            })
          } else {
            this.toastMessage = '请确认两次输入的密码一致'
            this.toast = true
            if (this.toastTimer) clearTimeout(this.toastTimer)
            this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
          }
        } else {
          this.toastMessage = '请先同意我们的条款'
          this.toast = true
          if (this.toastTimer) clearTimeout(this.toastTimer)
          this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
        }
      },
      hideToast () {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
      }
    },
    computed: {}
  }
</script>
<style scoped lang="scss">
  .paper_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    background-color: rgb(246, 241, 241)
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
