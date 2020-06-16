<template>
 <div class="m-lr-2">      
    <div class="m-b-2">
         <el-button type="primary" @click="back">返回</el-button>
    </div>               
 	<mavon-editor                                    
 		:value="text"               
 		:subfield="false"                                    
 		:boxShadow="false"                                    
 		defaultOpen="preview"                                    
 		:toolbarsFlag="false"                                   
 	 />  
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'Lookdetail',
   props: {
   },
   components: {

   },
   data () {
     return {
       id:'',
       ruleForm: [],
       text:''
     }
   },
   methods: {
     back(){
       this.$router.push('/published')
     }
   },
   mounted() {
     this.id=this.$route.query.id
     axios.post("/api/article/article",{ _id:this.id})
     .then(res=>{
       console.log(res);
       this.ruleForm = res.data.data
       console.log(this.ruleForm);
       this.text = res.data.data.text
       console.log(this.text);
     }).catch(err=>{
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>