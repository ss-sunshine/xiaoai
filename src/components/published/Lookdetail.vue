<template>
 <div class="m-lr-2">      
    <div class="m-b-2">
         <el-button type="primary" @click="back">返回</el-button>
    </div>               
 	<mavon-editor                                    
 		:value="detail.text"               
 		:subfield="false"                                    
 		:boxShadow="false"                                    
 		defaultOpen="preview"                                    
 		:toolbarsFlag="false"                                   
 	 />  
 </div>
</template>

<script>
 export default {
   name: 'Lookdetail',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>