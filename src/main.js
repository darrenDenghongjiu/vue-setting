// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import welcome from './components/welcome/welcome.vue';
import reger from './components/reger/reger.vue';
import hello from './components/hello/hello.vue';
import user from './components/user/user.vue';
import next from './components/next/next.vue';
import nextwo from './components/nextwo/nextwo.vue';
import home from './components/home/home.vue';


let VueRouter = require('vue-router');
/*如果登陆过*/

Vue.use(VueRouter);
/*全局只用一个<router-view></router-view> 其余二级均使用<router-link>*/
/*如果多使用会出现bug*/
let fileTogether = [
	{path: '/', name: 'home',component: home},
	{path: '/welcome', name: 'welcome',component: welcome},
	{path: '/reger',name: 'reger',component: reger},
	{path: '/hello',name: 'hello',component: hello},
	{path: '/user',name: 'user',component: user},
	{path: '/user/next',name: 'next',component: next},
	{path: '/user/next/nextwo',name: 'nextwo',component: nextwo}
];	 
let router = new VueRouter({routes:fileTogether});
	/*控制没有的页面*/
	
new Vue(Vue.util.extend({router}, App)).$mount('#app');
window.addEventListener('hashchange',function (){
if(!router.currentRoute.name){
	//防止用户自己输入url
	history.go(-1);
}
},false);



