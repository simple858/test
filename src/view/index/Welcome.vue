<template>
  <div>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>
<script>
  import AppFooter from '@/components/footer'

  export default {
    data () {
      return {}
    },
    components: {
      'appfooter': AppFooter
    },
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss">

</style>
