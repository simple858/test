import Vue from 'vue'
import Router from 'vue-router'
/* Auth */
const Login = resolve => require(['../view/auth/Login'], resolve)
const Signup = resolve => require(['../view/auth/Signup'], resolve)
/* View */
// const Welcome = resolve => require(['../view/first_page/Welcome'], resolve)
// const ShowPage = reslove => require(['../view/first_page/ShowPage'], reslove)
const Index = resolve => require(['../view/index/Index'], resolve)
const ProjectManage = resolve => require(['../view/project/ProjectManage'], resolve)
const ProjectDetail = resolve => require(['../view/project/ProjectDetail'], resolve)
const Project = resolve => require(['../view/project/index'], resolve)
/* personal view */
const Personal = resolve => require(['../view/personal'], resolve)
const UserProfile = resolve => require(['../view/personal/UserProfile'], resolve)
const BrowseHistory = resolve => require(['../view/personal/BrowseHistory'], resolve)
const CurrentProject = resolve => require(['../view/personal/CurrentProject'], resolve)
const MessageBox = resolve => require(['../view/personal/MessageBox'], resolve)
const SuccessDeal = resolve => require(['../view/personal/SuccessDeal'], resolve)
const MyProperty = resolve => require(['../view/personal/MyProperty'], resolve)

const Recruit = resolve => require(['../view/recruit'], resolve)

/* user view */
const User = resolve => require(['../view/user'], resolve)

/**
 * project view
 * */
const ProjectList = resolve => require(['../view/project/ProjectList'], resolve)

/* components */

// import userHead from '@/components/user_head'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
/*    {
      path: '/welcome',
      component: Welcome,
      name: 'welcome',
      children: [
        {path: '', component: ShowPage},
        {path: 'login', component: Login},
        {path: 'signup', component: Signup}
      ]
    }, */
    {
      path: '/index',
      component: Index
    },
    {
      path: '/personal',
      component: Personal,
      children: [
        {path: '', redirect: 'purse'},
        {path: 'profile', component: UserProfile},
        {path: 'browse_history', component: BrowseHistory},
        {path: 'current_project', component: CurrentProject},
        {path: 'message_box', component: MessageBox},
        {path: 'success_deal', component: SuccessDeal},
        {path: 'purse', component: MyProperty}
      ]
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/recruit',
      component: Recruit
    },
    {
      path: '/user/projectmanage',
      component: ProjectManage
    },
    {
      path: '/projects',
      component: ProjectList
    },
    {
      path: '/project',
      component: Project,
      children: [
        {path: '', redirect: 'detail'},
        {path: 'detail/:pid', component: ProjectDetail}
      ]
    }
  ]
})
