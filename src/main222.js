// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import login from './components/login/login.vue';
import reger from './components/reger/reger.vue';
import hello from './components/hello/hello.vue';
import user from './components/user/user.vue';
import next from './components/next/next.vue';
import nextwo from './components/nextwo/nextwo.vue';
console.log(next);


let VueRouter = require('vue-router');

//jquery
/*自动使用*/
Vue.use(VueRouter);
/*导入模块*/
//import Login from './components/Login.vue'
/*集合文件*/

/*两个测试模板*/

let fileTogether = [
	//{path:'/login',component:login,beforeEnter:function (){ 这里写代码}},
   {path:'/login',component:login},
   {path:'/reger',component:reger},
   {path:'/hello',component:hello},
   {path:'/user',component:user},
   {path:'/user/next',component:next},/*二级路由*/
   {path:'/user/next/nextwo',component:nextwo},/*三级路由*/
 // {path:'/user/:id',name:'user',component:user,
	/*嵌套导航
   {path:'/user/:id',component:user,
	children:[
		{path:'/user/next',component:next},
	],
   },
  */
   /*
   { path: '/user2/:id', component:user2,
      children: [
        { path: '', component: UserHome },
        { path: 'profile', component: UserProfile },

      ]
	}
	*/
	
];
//console.log(fileTogether);
const router = new VueRouter({routes:fileTogether});
//beforeEach//每个页面
//beforeEnter//单个页面
//router.beforeEach(function (){
	//alert(222);
//});


/* eslint-disable no-new */
console.log(Vue.util);/*this is vue function gather*/
new Vue(Vue.util.extend({router}, App)).$mount('#app');
var Build = true;
if(Build){
	window.API = '/api/';
}else{
	window.API = '/xianshang/';
}

/*
new Vue({
  el: '#app',
  render: h => h(App)
})
*/


