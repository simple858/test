<template>
  <div>
    <!--紫领c用户详情界面-->
    <!--<div class="base_info">-->
    <!--<div class="left"></div>-->
    <!--<div class="middle"></div>-->
    <!--<div class="right"></div>-->
    <!--</div>-->
    <mu-paper class="paper_3">
      <mu-row>
        <mu-col width="100" desktop="20" >
          <avator />
          <div>定位：<mu-badge v-for="(label,index) in resume" :key="index" :content="label"></mu-badge></div>
          <mu-flat-button label="紫领简历"/>
          已经完成项目：紫领网
        </mu-col>
        <mu-col width="100" desktop="60">
          <div>昵称：这是昵称</div>
          <div>当前状态：接单中</div>
          <div>
            会员等级:<mu-badge content=" 紫钻会员" primary/>
          </div>
          <div>
            <p>
              个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介
              绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个
              人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍

            </p>
          </div>
        </mu-col>
        <mu-col width="100" desktop="20" >
          <mu-raised-button label="聘请紫领" primary/>
          <div>能力等级:{{capacity_rank}}</div>
          <div>信用等级:{{credit_rank}}</div>
          <div>评价星级:{{evaluate_rank}}</div>
          <div>认证资质:<span v-for="skill in verified_skills">{{skill}}  </span></div>
        </mu-col>

      </mu-row>

    </mu-paper>
    <mu-paper class="paper_3">
      项目经历
      <div class="experience">项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历
        项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历
        项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历
        项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历项目经历</div>
    </mu-paper>

    <mu-paper class="paper_3">
      评论
      <div class="comment"></div>
    </mu-paper>
  </div>
</template>
<script>
  import Avator from '../../components/avator.vue'
  import API from '../../api'
  export default {
    data () {
      return {
        resume: ['java后端科学家', 'php魔法师', 'js前端切图仔'],
        gender: '男',
        state: '接单中',
        nickname: '这是昵称',
        credit_rank: 2,
        capacity_rank: 2,
        evaluate_rank: 2,
        verified_skills: ['java', 'mysql']
      }
    },
    components: {
      Avator},
    methods: {},
    computed: {},
    mounted () {
      API('getPublicUserInfo', {
        userId: this.$route.params.id
      }).then(res => {
        conssole.log(res)
      })
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
 .paper_3{
   margin: 10px 0;
 }
</style>
