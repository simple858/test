<template>
  <div class="card_container">
    <mu-paper>
      <div>当前状态：{{userProfile.status || '接单中'}}</div>
      <div class="base_info" style="cursor: pointer" @click="toUserProfile" >
        <avator  gender="男"></avator>
        <div>
          <div>昵称：{{userProfile.nickname}}</div>
          <div>定位：<mu-badge v-for="(label,index) in resume" :key="index" :content="label"></mu-badge></div>
        </div>
      </div>
      <div class="ranks">
        <div>能力等级:{{userProfile.capacityRank}}</div>
        <div>信用等级:{{userProfile.creditRank}}</div>
        <div>评价星级:{{userProfile.evaluateRank}}</div>
        <div>认证资质:<span v-for="skill in userProfile.verifiedSkills">{{skill}}  </span></div>
      </div>
    </mu-paper>
  </div>
</template>
<script>
  import Avator from '../components/avator.vue'
  export default {
    data () {
      return {}
    },
    props: {
      userProfile: {},
      username: {type: String, default: '这是昵称'},
      resume: {
        type: Array,
        default: () => {
          return ['java后端科学家', 'php魔法师', 'js前端切图仔']
        }
      },
      gender: {type: String, default: '男'},
      state: {type: String, default: '接单中'},
      nickname: {type: String, default: '这是昵称'},
      credit_rank: {type: Number, default: 2},
      capacity_rank: {type: Number, default: 2},
      evaluate_rank: {type: Number, default: 2},
      verified_skills: {
        type: Array,
        default: () => {
          return ['java', 'mysql']
        }
      },
      id: {type: String, default: '123'}
    },
    components: {
      'avator': Avator
    },
    methods: {
      toUserProfile () {
        this.$router.push(`/user/${this.id}`)
      }
    },
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .card_container {
    width: 28rem;
    padding: 1rem;
    .base_info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .ranks {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
