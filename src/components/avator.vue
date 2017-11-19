<template>
  <div class="avator">
    <img :src="avator"/>
    <div class="gender">{{gender}}</div>
  </div>
</template>
<script>
  import DEFAULT_AVATOR from '../assets/defaultUserlogo.png'

  export default {
    data () {
      return {}
    },
    props: {
      avator: {type: String, default: DEFAULT_AVATOR},
      gender: {type: String, default: '男'}
    },
    components: {},
    methods: {},
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .avator {
    position: relative;
    width: 128px;
    height: 128px;
    .gender {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>
