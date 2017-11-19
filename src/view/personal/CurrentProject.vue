<template>
  <div>
    <mu-paper :zDepth="2" class="container">


      <mu-row gutter>
        <mu-col desktop="60">
          <h2 class="title">一款基于实名认证的线上线下互动的社交软件，已有原型。IOS</h2>
          <span class="money_number">￥80000</span>
          <span class="second_title">交付时间: 2017-06-04</span>
          <!--<p class="pragraph">-->
            <!--本项目是基于实名认证（包含职业、学历、房产、汽车认证）主打线上聊天，线下活动的相亲交友软件。功能需求适配iPhone4s及以上iPhon备，IOS7及以上版本。主要功能包含：启动引导页，手机号注册，会员展示与筛选，线下活动报名支付，聊天功能，个人资料，会员购买功能，消息通知与推送。APP构架App主要有“约见”“线下活动”“聊天”“我”4个主页面【约见】-包含-->
            <!--会员展示、搜索、筛选功能【线下活动】-包含“活动”“往期精彩”两个子页面，“活动”包含报名支付功能【聊天】包含文字、图片、语音、表情基本聊天功能【我】包含详细个人资料、设置、实名认证、社交记录、谁看过我等功能-->
          <!--</p>-->
        </mu-col>
        <mu-col desktop="40">
          <mu-raised-button label="进度汇报" fullWidth primary/>
          <mu-raised-button label="交付" fullWidth primary/>
          <mu-raised-button label="B&P" />
          <mu-raised-button label="申请退出" />



        </mu-col>
      </mu-row>


    </mu-paper>
    <mu-paper>
      <mu-row gutter>
        <mu-col desktop="40">
          <mu-stepper :activeStep="activeStep" orientation="vertical">
            <mu-step>
              <mu-step-label>
                项目立项
              </mu-step-label>
              <mu-step-content>
                <p>
                  2017.5.26日正式立项
                </p>
              </mu-step-content>
            </mu-step>
            <mu-step>
              <mu-step-label>
                原型完成
              </mu-step-label>
              <mu-step-content>
                <p>
                  2017.6.26完成原型
                </p>
              </mu-step-content>
            </mu-step>
            <mu-step>
              <mu-step-label>
                项目交付
              </mu-step-label>
              <mu-step-content>
                <p>
                  2017.7.26正式交付
                </p>
              </mu-step-content>
            </mu-step>
          </mu-stepper>
        </mu-col>
        <mu-col desktop="60">
          分支情况
        </mu-col>
      </mu-row>



    </mu-paper>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        activeStep: 0
      }
    },
    components: {},
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .container{
    padding: 20px 30px 20px 30px;
    margin-top: 10px;
    .title{
      color: #0d47a1;
    }
    .second_title{
      color: #2196f3;
      font-size: 18px;
    }
    .money_number{
      color: #fdd835;
      font-size: 18px;
    }
    .pragraph{
      font-size: 16px;
      line-height: 40px;
    }
    .process{
      .title{
        margin: 0;
        color: #9e9e9e;
      }
    }
  }

</style>
