<template>
  <div class="welcome">
	<nagavition></nagavition>
    <div class="welcome-msg">{{ msg }}</div>
  </div>
</template>

<script>
/*注册了才能使用*/
import nagavition from '../nagavition/nagavition.vue';
export default {
  data () {
    return {
      msg: 'welcome'
    }
  },
  components:{nagavition},
  created(){
	console.log(this);
	for(var name in this){
		//console.log(name);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome { width:800px;  height:500px; background:green; line-height:50px; margin:auto; }
.welcome  .welcome-msg{ width:200px; margin:auto; text-align:center; color:white;  }
</style>
