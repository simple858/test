<template>
  <div>
    <mu-flat-button label="薪酬" backgroundColor="grey"/>
    <mu-flat-button label="开发周期" backgroundColor="grey"/>

    <mu-flat-button label="已参与抢单人数" backgroundColor="grey"/>
    <mu-flat-button label="截止日期" backgroundColor="grey"/>
    <mu-raised-button label="申请报名" primary/>
    <mu-row gutter>
      <mu-col width="100" desktop="66">


        <mu-paper :zDepth="2" class="project_detail">
          <h1 class="title">一款基于实名认证的线上线下互动的社交软件，已有原型。IOS</h1>
          <span class="second_title">交付时间: 已截止</span>
          <span class="money_number">￥80000</span>
          <p class="pragraph">
            本项目是基于实名认证（包含职业、学历、房产、汽车认证）主打线上聊天，线下活动的相亲交友软件。功能需求适配iPhone4s及以上iPhon备，IOS7及以上版本。主要功能包含：启动引导页，手机号注册，会员展示与筛选，线下活动报名支付，聊天功能，个人资料，会员购买功能，消息通知与推送。APP构架App主要有“约见”“线下活动”“聊天”“我”4个主页面【约见】-包含 会员展示、搜索、筛选功能【线下活动】-包含“活动”“往期精彩”两个子页面，“活动”包含报名支付功能【聊天】包含文字、图片、语音、表情基本聊天功能【我】包含详细个人资料、设置、实名认证、社交记录、谁看过我等功能
          </p>
          <h2 class="question_title">问题集</h2>
          <mu-list>
            <mu-list-item class="question_list">
              <div class="left_color_bar" slot="left">
              </div>
              <span slot="left">提问</span>
              <span slot="title">这个项目怎么样啊</span>
            </mu-list-item>
            <mu-list-item class="question_list" style="padding-left: 36px;">
              <div class="left_color_bar_a" slot="left">
              </div>
              <span slot="left">回复</span>
              <span slot="title">很厉害的项目</span>
            </mu-list-item>
          </mu-list>

          <mu-text-field hintText="对项目提问" multiLine :rows="3" :rowsMax="6" icon="question_answer"></mu-text-field>

        </mu-paper>
      </mu-col>
      <mu-col width="100" desktop="33">
        <mu-paper :zDepth="2" class="recommand">
          <div class="title">项目推荐</div>
          <mu-list>
            <mu-divider/>
            <mu-list-item class="list_item">
              <mu-icon slot="left" value="inbox"/>
              <span slot="title">紫领网</span>
              <span slot="describe">项目周期：三天</span>
              <span slot="right">￥80000</span>
              <div class="class">品质：金色</div>
            </mu-list-item>
            <mu-divider/>

            <mu-list-item class="list_item">
              <mu-icon slot="left" value="inbox"/>
              <span slot="title">紫领网</span>
              <span slot="describe">项目周期：三天</span>
              <span slot="right">￥80000</span>
              <div class="class">品质：金色</div>
            </mu-list-item>
            <mu-divider/>

            <mu-list-item class="list_item">
              <mu-icon slot="left" value="inbox"/>
              <span slot="title">紫领网</span>
              <span slot="describe">项目周期：三天</span>
              <span slot="right">￥80000</span>
              <div class="class">品质：金色</div>
            </mu-list-item>
            <mu-divider/>

          </mu-list>
        </mu-paper>
        <mu-paper :zDepth="2" class="recommand" style="margin-top: 20px;">
          <h1 class="title">这里是广告位</h1>
          <mu-list>

          </mu-list>
        </mu-paper>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>
  // import {getProjInfo} from '../../api/project'
  import API from 'api'

  export default {
    data () {
      return {}
    },
    components: {},
    methods: {},
    computed: {},
    mounted () {
      API('getProjectInfo', {
        pid: this.$route.params.pid
      }).then(data => console.log(data))
//      getProjInfo(this.$route.params.pid).then(res => console.log(res))
//      this.$store.dispatch('getProjInfo', this.$route.params.pid)
//        .then(res => {
//        console.log(res)
//          if (res.errorCode === 1) {
//            console.log('login success')
//            this.$store.commit('SET', {
//              type: 'loginTag',
//              data: true
//            })
//            this.$router.push('/index')
//          } else if (res.errorCode === 0) {
//            alert('密码不符合规则')
//          }
//      }, error => {
//        console.log(error)
//      })
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .project_detail {
    padding: 30px 40px 30px 40px;
    .title {
      color: #0d47a1;
    }
    .second_title {
      color: #2196f3;
      font-size: 18px;
    }
    .money_number {
      color: #fdd835;
      font-size: 18px;
    }
    .pragraph {
      font-size: 16px;
      line-height: 40px;
    }
    .question_list {
      .left_color_bar {
        width: 10px;
        height: 100%;
        background-color: #7e57c2;
        margin-left: -16px
      }
      .left_color_bar_a {
        width: 10px;
        height: 100%;
        margin-left: -16px;
        background-color: #e1bee7;
      }
    }
  }

  .recommand {
    .title {
      color: #9e9e9e
    }
    .list_item {
      position: relative;
      .class {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

  }
</style>
