<template>
  <div>

    <div style="display: flex; justify-content: space-between">
      <mu-flat-button v-for="(filter, index) in filters" :label="filter" backgroundColor="grey" :key="index" @click="search(index)"/>
      <mu-text-field hintText="搜索用户名、技术术语"/>
      <mu-raised-button label="搜索" secondary/>
    </div>

  </div>

</template>
<script>

  export default {
    data () {
      return {}
    },
    props: {
      filters: {
        type: Array,
        default: () => {
          return ['筛选条件1', '筛选条件2']
        }
      },
      search: {
        type: Function,
        default: () => {}
      }
    },
    components: {},
    methods: {},
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
