<template>
  <div>
    <mu-paper :zDepth="2" class="container">
      <mu-appbar title="项目库" style="background-color: rgb(255, 255, 255); box-shadow: none;color: black">
        <mu-flat-button icon="cloud_upload" label="上传" slot="right" style="color: black"/>
        <mu-flat-button icon="add" label="新建文件夹" slot="right" style="color: black"/>
      </mu-appbar>
      <mu-divider/>
      <mu-table multiSelectable enableSelectAll ref="table">
        <mu-thead>
          <mu-tr>
            <mu-th>名称</mu-th>

            <mu-th>大小</mu-th>
            <mu-th>创建者</mu-th>
            <mu-th>更新时间</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr>
            <mu-td class="lib_body_name">
              <mu-icon value="folder_open" color="#e1bee7"/>
              <span>src</span></mu-td>
            <mu-td>54 kb</mu-td>
            <mu-td>chenshuohan</mu-td>
            <mu-td>2017.6.2</mu-td>
          </mu-tr>
          <mu-tr v-for="(item, index) in fileList" :key="index">
            <mu-td class="lib_body_name">
              <mu-icon value="folder_open" color="#e1bee7"/>
              <span>{{item.dirName}}</span></mu-td>
            <mu-td>{{item.size}} kb</mu-td>
            <mu-td>{{item.userId}}</mu-td>
            <mu-td>2017.6.2</mu-td>
          </mu-tr>

        </mu-tbody>
      </mu-table>
    </mu-paper>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {}
    },
    created () {
      console.log('get project')
      this.$store.dispatch('getUserCurrentProject')
    },
    components: {},
    methods: {},
    computed: {
      ...mapState({
        fileList: state => {
          return state.user.userProject
        }

      })
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .container {
    .lib_body_name {
      padding-left: 0;
    }

    width: 1180px;
    height: 545px;
  }

</style>
