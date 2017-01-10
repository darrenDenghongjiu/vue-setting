<template>
  <div class="user">
    <nagavition></nagavition>
	<div class="user-msg">{{ msg }}</div>
	<div class="userlink" ><router-link to="/user/next">going to next</router-link></div>
  </div>
</template>

<script>
import nagavition from '../nagavition/nagavition.vue';
export default {
  data () {
    return {
      msg: 'user',
	  darren:'这个就是我',
	  tem:'555555555',
	  isHow:true,
    }
  },
  components:{nagavition},
  methods:{
	
  },
  created(){
	var loc = location.hash;
	console.log(loc);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .user { width:100%;  height:500px; background:green;  line-height:50px; }
 .user .user-msg{ width:200px; margin:auto; text-align:center; color:white;  }
 .userlink { background:red; font-size:50px; text-align:center; }
</style>
