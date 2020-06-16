<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'List',
   props: {
   },
   components: {

   },
   data () {
     return {

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