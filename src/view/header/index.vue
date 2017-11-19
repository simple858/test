<template>
  <div>
    <mu-appbar style="background-color: rgb(246, 241, 241);height:80px; box-shadow: none">
      <a @click="toIndex" slot="left" style="width: 100px;height: 100%; cursor: pointer;">
        <img :src="LOGO_NOBACK" slot="left" style="width: 100%">
      </a>
      <div class="desktop" slot="left">
        <mu-flat-button slot="left" color="black" label="聘请紫领" to="/recruit"/>
        <mu-flat-button slot="left" color="black" label="任务列表" to="/projects"/>
        <mu-flat-button slot="left" color="black" label="帮助" to="/help" :rippleOpacity="0"/>
      </div>
      <div class="desktop" slot="right">

        <div v-if="loginTag" slot="right" style="height: 100%">

          <mu-flat-button color="grey" label="钱包" icon="attach_money" to="/wallet"/>
          <mu-flat-button v-if="loginTag" slot="right" color="grey" label="未读信息" ref="msgButton"
                          icon="remove_red_eye" @hover="toggle('msgOpen')" to="/message"/>
          <mu-flat-button v-if="loginTag" slot="right" color="grey" label="其他" to="/other"/>

          <mu-flat-button v-if="loginTag" slot="right" ref="userButton" @hover="toggle('userOpen')" to="/personal">
            <mu-avatar :src="userAvatorImg"/>
          </mu-flat-button>
        </div>


        <div v-else="loginTag" slot="right" style="height: 100%">
          <mu-flat-button label="注 册" slot="right" style="color: #000;" to="/signup"/>
          <mu-flat-button label="登 录" slot="right" style="color: #000;" to="/login"/>
        </div>
      </div>
      <div class="mobile_device" slot="left">
        <span>紫领网</span>
      </div>
      <div class="mobile_device" slot="right">
        <mu-icon-button icon="menu" touch @click.native="drawer = true"/>
      </div>


    </mu-appbar>

    <mu-popover :trigger="msgTrigger" :open="msgOpen" @close="handleClose" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" v-if="loginTag">
      <mu-menu>
        <mu-menu-item title="未读消息">
          <mu-badge content="0" slot="after"/>
        </mu-menu-item>

      </mu-menu>
    </mu-popover>
    <mu-popover :trigger="userTrigger" :open="userOpen" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" @close="handleClose" v-if="loginTag">
      <mu-paper class="popop_user_profile" style="padding: 0 20px 0px 20px">
        <h3 style="text-align: center">{{userInfo.cellphone }}</h3>
        <mu-badge content="空闲中" primary>
        </mu-badge>
        <mu-list>
          <mu-list-item title="信用">
            <mu-icon slot="left" value="credit_card"></mu-icon>
            <mu-linear-progress mode="determinate" :value="8" color="blue"/>
            <span slot="right">0.8/10</span>
          </mu-list-item>
          <mu-list-item title="能力">
            <mu-icon slot="left" value="attach_money"></mu-icon>
            <mu-linear-progress mode="determinate" :value="50" color="orange"/>
            <span slot="right">0.8/10</span>
          </mu-list-item>
          <mu-flexbox justify="space-between" :gutter="3">
            <mu-flat-button label="修改密码"/>
            <mu-flat-button label="注销" @click="logout"/>
          </mu-flexbox>
        </mu-list>
      </mu-paper>
    </mu-popover>
    <mu-drawer right :open="drawer" :docked="false" @close="touchToggle()">
      <mu-list @itemClick="touchToggle()">
        <mu-list-item title="注册" to="/signup"/>
        <mu-list-item title="登录" to="/login"/>
      </mu-list>
    </mu-drawer>

  </div>
</template>
<script>
  import LOGO_NOBACK from 'assets/LOGO-Zling2.png'
  import { mapState } from 'vuex'
  import userAvatorImg from 'assets/defaultUserlogo.png'
  import API from 'api'

  export default {
    data () {
      return {
        LOGO_NOBACK,
        userAvatorImg,
        msgOpen: false,
        userOpen: false,
        msgTrigger: null,
        userTrigger: null,
        anchorOrigin: {'vertical': 'bottom', 'horizontal': 'middle'},
        targetOrigin: {'vertical': 'top', 'horizontal': 'middle'},
        drawer: false
      }
    },
    components: {},
    methods: {
      toIndex () {
        this.$router.push('/index')
      },
      handleClose () {
        this.userOpen = false
        this.msgOpen = false
      },
      toggle (type) {
        // console.log(type)
        this[type] = !this[type]
        // console.log(this[type])
      },
      logout () {
        API('logout').then(res => {
          this.userOpen = false
//          this.$store.commit('SET', {
//            type: 'user',
//            data: null
//          })
          location.reload()
          this.$router.push('/index')
        })
      },
      touchToggle () {
        this.drawer = !this.drawer
      }
    },
    computed: {
      ...mapState({
        loginTag: (state) => {
          return state.user.info !== null
        },
        userInfo: (state) => {
          return state.user.info
        }
      })
    },
    updated () {
      if (this.loginTag) {
        this.msgTrigger = this.$refs.msgButton.$el
        this.userTrigger = this.$refs.userButton.$el
      }
    },
    filters: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  // @import '~muse-ui/src/styles/colors.less';

  .popop_user_profile {
    width: 300px;
    height: 240px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) {
    .desktop {
      display: none
    }
    .mobile_device {
      color: #000
    }
  }

  @media (min-width: 720px) {
    .mobile_device {
      display: none
    }
    .desktop {
      height: 100%;
    }

  }

</style>
