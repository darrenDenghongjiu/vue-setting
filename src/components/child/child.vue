<template name="child">
  <div class="next">
	<div class="child" v-on:click="tab">{{msg}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'children',
	  boK:'zhe li shi child',
    }
  },
  methods:{
	tab:function(index){
		console.log(this.boK);
		this.$emit('listingchild',this.boK);
		console.log('======');
		//console.log(this.$el.$destroy(true));
	}
  },
  created(){
	
  }
}
</script>
<style scoped>
 .child { font-size:50px; color:white; }
</style>
