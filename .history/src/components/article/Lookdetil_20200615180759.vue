<template>
 <div>                           
 	<mavon-editor                                    
 		:value="detail"               
 		:subfield="false"                                    
 		:boxShadow="false"                                    
 		defaultOpen="preview"                                    
 		:toolbarsFlag="false"                                   
 	 />            
      <!-- <mavon-editor
        class="md"
        :value="webDataString"
        :subfield="false"
        :defaultOpen="'preview'"
        :toolbarsFlag="false"
        :editable="false"
        :scrollStyle="true"
        :ishljs="true"
      />           -->
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name: '',
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