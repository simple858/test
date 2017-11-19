<template>
  <div>
    <div class="footer">
      <div class="links">
        <span>关于紫领</span>
        <a href="" class="link_item">紫领介绍</a>
        <a href="" class="link_item">公司资质</a>
        <a href="" class="link_item">案例展示</a>
        <a href="" class="link_item">职业社区</a>
        <a href="" class="link_item">APP下载</a>

        <a href="" class="link_item">联系我们</a>

        <br/>

      </div>
      <div class="links">
        <span>媒体报道</span>
        <a href="" class="link_item">新闻网</a>
        <a href="" class="link_item">获奖</a>
        <a href="" class="link_item">合作伙伴</a>
        <br/>

      </div>
      <div class="links">
        <span>法律和条款</span>
        <a href="" class="link_item">隐私政策</a>
        <a href="" class="link_item">版权政策</a>
        <a href="" class="link_item">行为守则</a>
        <a href="" class="link_item">条款与条件</a>
        <br/>

      </div>
      <!--<div class="copyright">-->
        <!--Copyright &copy; 紫领科技-->
      <!--</div>-->

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    components: {},
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss" ref="stylesheet/scss">
  .footer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    border-top: solid 1px #F8F8F8;
    position: relative;


  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right:2rem;

  .link_item {
    color: #807e7e;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    padding-left: 4px;
    padding-right: 4px;
  }

  }
  .copyright {
    color: #adadad;
    font-size: 14px;
    text-align: center;
  }

  }
</style>
