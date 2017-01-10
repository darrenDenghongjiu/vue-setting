<template>
  <div class="next">
	<nagavition></nagavition>
	<div class="nextlink"><router-link to="/user/next/nextwo">going to nextwo</router-link></div>
	
    <h1>{{ age }}</h1>
	<h1>{{mymsg}}</h1>
	<child v-on:listingchild="myboy"></child>
	<ul  class="nextlist">
		<li v-for="(name,index) in newarr" ref="tab" 
		v-on:click="tab" >{{index}}</li>
	</ul>
	
  </div>
</template>

<script>

import nagavition from '../nagavition/nagavition.vue';
import nextwo from '../nextwo/nextwo.vue';
import child from '../child/child.vue';
import Vue from 'vue';
export default {
  props:['age'],
  data () {
    return {
      msg: 'nextnextnextnext',
	  boK:true,
	  newarr:[1,2,3,4,5,6],
	  mymsg:'',
    }
  },
  components:{nextwo,nagavition,child},
  methods:{
	tab:function(index){
		console.log(this.boK);
		this.$emit('childtellme',this.boK);
		console.log('======');
		//return;
		//console.log(this.$el.querySelect); 操作dom
		//this.$data.msg == this.msg; $data 获取自己data所有数据
		//$options // 获取自己对象有多少个options
		//$refs /*给用过来的模块来使用*/
		//操作子集下面的dom this.$refs.darren.$el.querySelect(element);
		//console.log();
		//$.when().done
		//测试接口
		var str = 'platform=3&version=1.1.0&openId=7771AF1B5FE4CE98A40213311A641917&requestId=2178591259816&pageIndex=1&pageSize=20&dataType=0';
		var newarr = str.split('&');
		var json = {};
		for(var i=0;i<newarr.length;i++){
			var morearr = newarr[i].split('=');
			json[morearr[0]] = morearr[1];
		}
		//console.log(json);
		var API = 'api/';
		var jsondata = {};
		var three = $.ajax({
			url:API,
			data:json
		}).success(function (res){
			var newdata = res.data;
			//alert('成功了');
		})
		.error(function (res){
			alert('失败了');
		});
		console.log(this.$refs.tab[index])
	},
	myboy(msg){
		this.mymsg = msg;
		console.log(msg);
		console.log('这里是最新消息');
	}
  },
  created(){
	//if(location.hash.indexOf('next')>1){
		//
	//}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .next { width:100%;  height:500px; background:green;  line-height:50px; }
 .next .next-msg{ width:200px; margin:auto; text-align:center; color:white;  }
 .nextlink { background:red; font-size:50px; text-align:center; }
 .nextlist { width:600px; margin-top:50px;  }
 .nextlist li { width:100px; height:30px; background:red;  color:white; line-height:30px; }
</style>
