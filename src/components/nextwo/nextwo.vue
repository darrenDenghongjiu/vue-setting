<template>
  <div  class="nextwo">
	<nagavition></nagavition>
	<div class="nextwo-msg">{{ msg1 }}</div>
  </div>
</template>

<script>
import nextw from './nextwo.js';
import nagavition from '../nagavition/nagavition.vue';
console.log(tab());
console.log('==============');
export default {
  data () {
    return {
      msg1: 'nextwo'
    }
  },
  components:{nagavition},
  methods:{
		tab1:function (){
			//debugger;
		},
  },
  beforeCreate(){
	//alert('1111111111');
	console.log(this);
  },
  beforeMount(){
  
  },
  updated(){
      //alert(123);
  },
  created:function (){
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nextwo { width:100%;  height:500px; background:green;  line-height:50px; }
.nextwo .nextwo-msg{ width:200px; margin:auto; text-align:center; color:white;  }
</style>
