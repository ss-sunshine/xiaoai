<template>
 <div>
     <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
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