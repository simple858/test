# zling.net

> A Vue.js project 紫领前端项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 基于Vuejs的紫领前端
 - Vuejs制作前端页面
 - Vue-router管理前端路由
 - Vuex管理页面可复用状态
 - UI：Muse-UI
 - http client：axios

## 项目目录结构
root
 - build 构建代码
   - 开发服务器和webpack配置都在这个目录下
 - config 配置
   - 配置了开发时代理在index中
 - dist 构建生产版本后产生的目录
   - index.html
   - static
   - **运行打包命令后整个丢进nginx的网站根目录即可**
 - src 项目源码
   - api 项目api集中处理
   - assets 静态文件
   - components 可复用小组件
   - mock 测试用mock服务器
   - router 前端路由
   - store 全局状态管理器vuex
   - styles 可公用css样式
   - utils http客户端和geetest验证码相关代码
   - view 具体页面文件
   - App.vue 根组件
   - main.js webpack打包入口
 - test 自动化测试代码
 - static 静态文件
> 项目采用了eslint作为代码规范工具,详见相关的文档

> 项目使用axios作为http客户端发起请求，进一步将axios封装成一个自定义的客户端，并暴露给项目api统一使用，并最后封装成API对象，由api生成，组件中需要调用时，传入需要调用的api名称，在获取成功将返回promise对象组件调用
