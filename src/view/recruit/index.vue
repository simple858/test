<template>
  <div>
    <search-bar :filters="filters" :search="searchEmployee"></search-bar>
    <div class="user_card_container">
      <user-card v-for="(user, index) in starEmployee" :key="`index-superstar-${index}`" :userProfile="user" :id="user.userId"/>
    </div>
  </div>
</template>
<script>
  import SearchBar from '../../components/search_bar.vue'
  import UserCard from '@/components/user_card'
  import API from '../../api'

  export default {
    data () {
      return {
        filters: ['职务筛选', '技术筛选', '认证资质筛选'],
        starEmployee: [],
        currentPage: 1,
        pageNum: 15
      }
    },
    components: {
      'search-bar': SearchBar,
      'user-card': UserCard
    },
    methods: {
      /**
       * search emplyee
       * @param filter = 0,1,2,3,
       */
      searchEmployee (filter = 0) {
        console.log('search filter', filter)
        API('serachEmployee', {
          filter: 0,
          currentPage: this.currentPage,
          pageNum: this.pageNum
        }).then(res => {
          this.starEmployee = res
        })
      }
    },
    computed: {},
    mounted () {
      this.searchEmployee()
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .user_card_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
