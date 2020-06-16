<template>
 <div>
     <el-table
    :data="ruleForm"
    stripe
    style="width: 100%">
    <el-table-column
      prop="index"
      label="#">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者">
    </el-table-column>
    <el-table-column
      prop="category"
      label="类目">
    </el-table-column>
    <el-table-column
      prop="source"
      label="来源">
    </el-table-column>
    <el-table-column
      prop="star"
      label="重要性">
    </el-table-column>
    <el-table-column
      prop="date"
      label="发布时间">
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
         type="primary"
          @click="Edit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          type="danger"
          @click="Delete(scope.$index, scope.row)">删除</el-button>
          <el-button
          type=" type="success""
          @click="Look(scope.$index, scope.row)">查看</el-button>
      </template>
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
         ruleForm:[]
     }
   },
   methods: {
         getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data.data);
          this.ruleForm = res.data.data;
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