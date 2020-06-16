<template>
 <div>
     <no-ssr>                                
 	<mavon-editor                                    
 		                                   
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
 </no-ssr>
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
         ruleForm:[]
     }
   },
   methods: {
        getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data.data);
          // this.arr = res.data.data;
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