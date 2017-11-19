<template>
  <div>
    <banner></banner>
    <div style="display: flex; justify-content: center;font-size: 24px; text-align: center;">推荐任务</div>

    <div class="container">

      <loading-bar v-if="!projectList"></loading-bar>
      <projcard v-for="(project, index) in projectList" :project="project" :key="`index-project-${index}`"></projcard>
    </div>
    <div style="display: flex; justify-content: center">
      <mu-raised-button label="更多任务" to="/projects"/>
    </div>
    <div style="display: flex; justify-content: center;font-size: 24px; text-align: center;">人气紫领</div>
    <div class="container">
      <loading-bar v-if="!projectList"></loading-bar>
      <user-card v-for="(user, index) in starEmployee" :key="`index-superstar-${index}`" :userProfile="user"/>
    </div>
    <div style="display: flex; justify-content: center">
      <mu-raised-button label="更多紫领" to="/recruit"/>
    </div>

  </div>
</template>
<script>
  import API from 'api'
  import Banner from './Banner'
  import projectCard from '../../components/project_card'
  // import DEFAULTIMG from '../../assets/default1.png'
  import UserCard from 'components/user_card'
  import LoadingBar from 'components/loading'

  export default {
    data () {
      return {
        userList: [{}, {}, {}, {}, {}, {}],
        projectList: null,
        starEmployee: null,
        all_show: true,
        web_show: false,
        android_show: false,
        ios_show: false,
        wx_show: false
      }
    },
    components: {
      'banner': Banner,
      'projcard': projectCard,
      'user-card': UserCard,
      LoadingBar
    },
    methods: {},
    computed: {},
    mounted () {
      API('getIndexData').then(data => {
        // console.log(data)
        this.projectList = data.recommend
        this.starEmployee = data.userStar
      })
    },
    filter: {
      isEmpty (value) {
        if (value) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .action_button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    height: 50px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>
