<template>
  <div class="reger">
	<nagavition></nagavition>
	<div class="reger-msg">{{ msg }}</div>
  </div>
</template>

<script>
import nagavition from '../nagavition/nagavition.vue';
export default {
  data () {
    return {
      msg: 'reger'
    }
  },
  components:{nagavition},
  destroy(){
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .reger { width:100%;  height:500px; background:green;  line-height:50px; }
 .reger .reger-msg{ width:200px; margin:auto; text-align:center; color:white;  }
</style>
