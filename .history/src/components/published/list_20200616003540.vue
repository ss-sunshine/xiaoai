<template>
  <div class="m-lr-2">
    <el-table :data="ruleForm" border stripe style="width: 100%">
      <el-table-column align="center" prop="`index`" label="#"></el-table-column>
      <el-table-column align="center" prop="title" label="标题"></el-table-column>
      <el-table-column align="center" prop="author" label="作者"></el-table-column>
      <el-table-column align="center" prop="category" label="类目"></el-table-column>
      <el-table-column align="center" prop="source" label="来源"></el-table-column>
      <el-table-column align="center" prop="star" label="重要性"></el-table-column>
      <el-table-column align="center" prop="date" label="发布时间"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <div class="d-f">
              <el-button type="primary" @click="Edit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" @click="Delete(scope.$index, scope.row)">删除</el-button>
          <el-button type="success" @click="Look(scope.$index, scope.row)">查看</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "List",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: []
    };
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
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>