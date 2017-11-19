<template>
  <div>
    <search-bar :filters="filters"></search-bar>
    <div class="task_result">
      <img src="../../assets/笑脸.png" />
      <div class="task_result_text">按搜索共有6个项目正在寻找人才</div>
    </div>
    <div class="container">

      <projcard v-for="(project, index) in projectList" :project="project" :key="`index-project-${index}`"></projcard>

      <!--<project-card v-for="(proj, index) in projList" :project_title="proj.title" :index="index" :key="index"-->
      <!--:project_duration="proj.duration" :moneyNum="proj.moneyNum" :img="proj.img"-->
      <!--class="proj_item"></project-card>-->
    </div>
  </div>
</template>
<script>
  import SearchBar from '../../components/search_bar.vue'
  import ProjectCard from '../../components/project_card.vue'
  // import DEFAULTIMG from '../../assets/default1.png'

  import API from '../../api'

  export default {
    data () {
      return {
        filters: ['技术筛选', '职务范围', '薪资范围', '项目等级'],
        pageNum: 15,
        currentPage: 1,
        projectList: []
      }
    },
    components: {
      'search-bar': SearchBar,
      'projcard': ProjectCard
    },
    methods: {
      /**
       * filter 0:无筛选 1:技术筛选 2:职务筛选 3:薪资范围筛选 4:项目等级筛选
       * @param filter
       */
      searchProject (filter = 0) {
        console.log('fdsafasdf')
        API('searchProject', {
          filter,
          currentPage: this.currentPage,
          pageNum: this.pageNum
        }).then(res => {
          console.log('res:' + res.taskList.list)
          this.projectList = res.taskList.list
          console.log(this.projectList)
        })
      }
    },
    computed: {},
    mounted () {
      this.searchProject()
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .task_result {
    margin-left: 30px;
    display: flex;

    img{
      opacity: 1;
    }

    .task_result_text {
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #808080;
      letter-spacing: 0;
      line-height: 30px;
    }

  }

  .container {
    display: flex;
    /*justify-content: space-between;*/
    align-items: flex-start;
    flex-wrap: wrap;
    width: 1200px;
    margin-top: 25px;
  }
</style>
