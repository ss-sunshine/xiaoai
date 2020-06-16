<template>
  <div class="m-lr-2">
    <el-table :data="ruleForm.slice((currentPage-1)*pageSize,currentPage*pageSize)" 
    border stripe style="width: 100%">
      <el-table-column align="center" type="index" label="#" width="50"></el-table-column>
      <el-table-column align="center" prop="title" label="标题"></el-table-column>
      <el-table-column align="center" prop="author" label="作者" width="100"></el-table-column>
      <el-table-column align="center" prop="category" label="类目" width="150"></el-table-column>
      <el-table-column align="center" prop="source" label="来源" width="100"></el-table-column>
      <el-table-column align="center" prop="star" label="重要性" width="200"></el-table-column>
      <el-table-column align="center" prop="date" label="发布时间" width="100"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <div class="f-j">
            <el-button type="primary" size="mini" @click="Edit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="Delete(scope.$index, scope.row)">删除</el-button>
            <el-button type="success" size="mini" @click="Look(scope.$index, scope.row)">查看</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="ruleForm.length">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "List",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: [],
      pageSize:10,
      currentPage:1
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data.data);
          this.ruleForm = res.data.data;
          this.ruleForm.map(item => {
            //   console.log(item);
            item.star = item.star * 1;
            item.date = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒");
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val){
        // console.log(`每页 ${val} 条`);
        this.pageSize=val
    },
    handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage=val
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