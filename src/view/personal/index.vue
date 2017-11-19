<template>
  <div>
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="25">
        <mu-paper :zDepth="2" class="left_paper">
          <avator :avator="avatorURL"/>
          <div>欢迎您：{{username}}</div>
          <div class="user_username">会员等级:
            <mu-badge content=" 紫钻会员" primary/>
          </div>
          <div class="user_username">紫领简历完成度：</div>
          <mu-linear-progress mode="determinate" :value="80"/>
        </mu-paper>

        <mu-paper :zDepth="1" class="left_paper">
          <div>资质等级</div>
          <div>信用等级</div>
          <div>评价星级</div>
          <div>资质</div>
          <a to="/more">更多认证</a>
        </mu-paper>
        <mu-paper class="left_paper">
          <mu-badge v-for="(label,index) in resume" :key="index" :content="label"></mu-badge>
        </mu-paper>
      </mu-col>
      <mu-col width="100" tablet="50" desktop="75">
        <mu-paper :zDepth="2">
          <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" icon="attach_money" title="个人钱包" href="#/personal/purse"/>
            <mu-tab value="tab2" icon="assignment" title="当前项目" href="#/personal/current_project"/>
            <mu-tab value="tab3" icon="message" title="消息" href="#/personal/message"/>
            <mu-tab value="tab4" icon="person_pin" title="成长记录" href="#/personal/mile_stone"/>

          </mu-tabs>
        </mu-paper>

        <router-view>
        </router-view>
      </mu-col>
      <!--<mu-col width="100" tablet="50" desktop="75">-->
      <!--<mu-paper class="user_profile_show" :zDepth="2">-->
      <!--<h3 class="title">您的成果</h3>-->
      <!--<mu-flexbox justify="center" class="flex-box">-->
      <!--<mu-flexbox-item class="flex-item">-->
      <!--<span class="number">6</span><br>-->
      <!--<span class="desc">已承接的项目/个</span>-->
      <!--</mu-flexbox-item>-->
      <!--<mu-flexbox-item class="flex-item">-->
      <!--<span class="number">0.8</span><br>-->
      <!--<span class="desc">信用等级/等级</span>-->
      <!--</mu-flexbox-item>-->
      <!--<mu-flexbox-item class="flex-item">-->
      <!--<span class="number">0</span><br>-->
      <!--<span class="desc">总收入/元</span>-->
      <!--</mu-flexbox-item>-->

      <!--</mu-flexbox>-->
      <!--</mu-paper>-->

      <!--<router-view>-->
      <!--</router-view>-->
      <!--</mu-col>-->
    </mu-row>

  </div>
</template>
<script>
  import UserAvatorURL from '../../assets/defaultUserlogo.png'
  import Avator from '../../components/avator.vue'

  export default {
    data () {
      return {
        avatorURL: UserAvatorURL,
        username: 'zilingspace.com',
        activeTab: 'tab1',
        resume: ['java后端科学家', 'php魔法师', 'js前端切图仔']
      }
    },
    components: {
      Avator
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    },
    mounted () {
      this.$store.dispatch('getPrivateUserInfo', {
        currentUser: this.$store.state.user.info.userId
      })
    },
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

  .flex-box {
    margin-top: 70px;
  }

  .left_paper {
    margin: 10px 0 20px 0;
  }

  .user_profile_show {
    height: 290px;
    background: url('../../assets/person_achievement.png');
    background-size: cover;
    .title {
      line-height: 40px;
      margin: 0;
      color: #0d47a1;
      font-size: 28px
    }

    .flex-item {
      text-align: center;

      .number {
        font-size: 28px;
        color: #ffeb3b;
        font-weight: bold;
      }

      .desc {
        font-size: 16px;
        font-weight: bold;
        color: #9e9e9e
      }

    }

  }

  .sidebar {
    .user_avator_paper {
      height: 290px;

      .user_background {
        background: url("../../assets/defaultUserBg.png") center center no-repeat;
        width: 100%;
        height: 110px;
        position: relative;

        .user_avator_img {
          width: 122px;
          height: 122px;
          transform: translatex(-50%);
          position: absolute;
          top: 47px;
          left: 50%;
          border-radius: 50%;
        }
      }
      .user_username {
        font-size: 22px;
        line-height: 30px;
        color: rgb(102, 102, 102);
        margin-top: 80px;
        text-align: center;
      }
    }

    .side_menu {
      margin-top: 10px;
      overflow: hidden;
      .isActive {
        background-color: #9e9e9e;
      }
    }
  }

</style>
