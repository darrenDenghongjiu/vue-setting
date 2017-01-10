<template>
	<div class="home">
		<a href="#/welcome">{{msg}}</a>
	</div>
</template>

<script>
//import next from '../next/next.vue';
/*v-show 可以用data下面的值来控制*/
export default {
  data () {
    return {
      msg: '这里是登陆',
	  isHow:true,
    }
  },
  methods:{
	tab(){
		switchCtrol = true;
		switchT();
		//localStorage.setItem("b","isaac");
		//var b = localStorage.getItem("b");//获取b的值
		//localStorage.removeItem("c");//清除c的值
		localStorage.setItem('switchCtrol',1);
	},
  },
  created(){
	var loc = location.hash;
	console.log(loc);
  }
}
</script>
<style scoped>
 .home  { width:100;  height:500px; background:green; line-height:500px; font-size:50px; 
 margin:auto; text-align:center;  }
</style>
