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
import axios from "axios";
 export default {
   name: 'Lookdetil',
   props: {
   },
   components: {

   },
   data () {
     return {
         ruleForm:[],
         detail:''
     }
   },
   methods: {
        getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data.data);
          this.ruleForm = res.data.data;
        //   console.log(this.ruleForm[this.ruleForm.length-1]);
          this.detail=this.ruleForm[this.ruleForm.length-1]
        })
        .catch(err => {
          console.log(err);
        });
    },
    back(){
        this.$router.push('/article')
    }
   },
   mounted() {
       this.getData();
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>