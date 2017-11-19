<template>
  <mu-paper class="user_profile" :zDepth="2">
    <div class="container">
      <mu-text-field label="昵称" labelFloat hintText="chenshuohan"></mu-text-field>
      <mu-text-field label="github" labelFloat hintText="github.com/cshjarry"
                     style="margin-left: 10px;"></mu-text-field>
      <br>
      <mu-raised-button icon="widgets" label="技能选择" ref="button" primary @click="toggle" />
      <mu-popover :open="skill_dropdown_open" :autoPosition="true" :trigger="trigger"
                  @close="closeSelectSkill">
        <mu-menu>
          <mu-menu-item title="语言" rightIcon="keyboard_arrow_right">
            <mu-menu @itemClick="handleSelectSkill">
              <mu-menu-item title="C/C++" value="C/C++"></mu-menu-item>
              <mu-menu-item title="C#" value="C#"></mu-menu-item>
              <mu-menu-item title="java" value="java"></mu-menu-item>
              <mu-menu-item title="python" value="python"></mu-menu-item>
              <mu-menu-item title="PHP" value="PHP"></mu-menu-item>
              <mu-menu-item title="JavaScript" value="JavaScript"></mu-menu-item>
              <mu-menu-item title="Ruby" value="Ruby"></mu-menu-item>
              <mu-menu-item title="Go" value="Go"></mu-menu-item>
              <mu-menu-item title="Swift" value="Swift"></mu-menu-item>
            </mu-menu>

          </mu-menu-item>
          <mu-menu-item title="方向" rightIcon="keyboard_arrow_right">
            <mu-menu @itemClick="handleSelectSkill">
              <mu-menu-item title="Linux" value="Linux"></mu-menu-item>
              <mu-menu-item title="前端" value="前端"></mu-menu-item>
              <mu-menu-item title="后端" value="后端"></mu-menu-item>
              <mu-menu-item title="IOS" value="IOS"></mu-menu-item>
              <mu-menu-item title="安卓" value="安卓"></mu-menu-item>
              <mu-menu-item title="微信(公众号/小程序)" value="微信(公众号/小程序)"></mu-menu-item>
            </mu-menu>
          </mu-menu-item>
        </mu-menu>
      </mu-popover>
      <div class="chip_container">
        <mu-chip v-for="(skill,index) in selectedSkills" style="margin-right: 5px" showDelete key="index"
                 @delete="deleteSkill(index)">
          {{skill}}
        </mu-chip>
      </div>
      <div class="exp_container">
        <div class="add_button">
          <mu-raised-button icon="add" slot="right" label="项目经历" primary @click="edit_show = true"></mu-raised-button>
        </div>
        <div class="exp_edit" v-show="edit_show">
          <mu-text-field label="项目名称" labelFloat v-model="exp_edit_title"></mu-text-field>
          <br/>

          <mu-text-field hintText="简单叙述项目和自己在项目中做的工作" multiLine :rows="3" :rowsMax="6" v-model="exp_edit_desc"/>
          <br>
          <mu-float-button icon="add" primary @click="addToExp" mini></mu-float-button>
          <mu-float-button icon="remove" @click="closeEdit" mini></mu-float-button>
        </div>
        <mu-list>
          <mu-sub-header>项目经历</mu-sub-header>
          <mu-list-item v-for="(exp,index) in expList" key="index" style="margin-bottom: 10px">
            <div class="left_color_bar" slot="left">
            </div>
            <span slot="title">{{exp.title}}</span>
            <span slot="describe">{{exp.desc}}</span>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="编辑" @click="editExp(exp,index)"/>
              <mu-menu-item title="删除" @click="deleteExp(index)"/>
            </mu-icon-menu>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <mu-toast v-if="toast" message="请先完善项目经历" @close="hideToast"/>
    <mu-toast v-if="skill_alert" message="信用低于0.5最多添加4条技能记录~" @close="hideSkillAlertToast"/>
  </mu-paper>
</template>
<script>
  export default {
    data () {
      return {
        selectedSkills: [],
        skill_dropdown_open: false,
        trigger: null,
        edit_show: false,
        exp_edit_title: '',
        exp_edit_desc: '',
        expList: [],
        toast: false,
        skill_alert: false
      }
    },
    mounted () {
      this.trigger = this.$refs.button.$el
    },
    components: {},
    methods: {
      closeSelectSkill () {
        this.skill_dropdown_open = false
      },
      hideSkillAlertToast () {
        this.skill_alert = false
        if (this.skilltoastTimer) clearTimeout(this.skilltoastTimer)
      },
      deleteExp (index) {
        this.expList.splice(index, 1)
      },
      editExp (exp, index) {
        this.exp_edit_title = exp.title
        this.exp_edit_desc = exp.desc
        this.expList.splice(index, 1)
        this.edit_show = true
      },
      hideToast () {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
      },
      addToExp () {
        if (this.exp_edit_desc && this.exp_edit_title) {
          this.expList.push({
            title: this.exp_edit_title,
            desc: this.exp_edit_desc,
            createAt: new Date(),
            updateAt: new Date()
          })
          this.closeEdit()
        } else {
          this.toast = true
          if (this.toastTimer) clearTimeout(this.toastTimer)
          this.toastTimer = setTimeout(() => {
            this.toast = false
          }, 2000)
        }
      },
      closeEdit () {
        this.exp_edit_title = ''
        this.exp_edit_desc = ''
        this.edit_show = false
      },
      toggle () {
        this.skill_dropdown_open = !this.skill_dropdown_open
      },
      handleSelectSkill (item) {
        console.log(item.value)
        let skill = item.value
        if (this.selectedSkills.length < 4) {
          let set = new Set(this.selectedSkills)
          this.selectedSkills = [...set.add(skill)]
          console.log(this.selectedSkills)
        } else {
          this.skill_alert = true
          this.skilltoastTimer = setTimeout(() => {
            this.skill_alert = false
          }, 2000)
        }
      },
      deleteSkill (index) {
        this.selectedSkills.splice(index, 1)
      }
    },
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

  .user_profile {
    margin-top: 10px;
    padding: 20px 50px 50px 50px;

    .container {
      margin: 0;

      .chip_container {
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .exp_container {

        .exp_edit {
          border-bottom-width: 1px;
        }

        .left_color_bar {
          width: 10px;
          height: 100%;
          background-color: #7e57c2;
          margin-left: -16px
        }

      }
    }
  }

</style>
