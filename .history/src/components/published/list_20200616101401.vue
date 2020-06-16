<template>
  <div class="m-lr-2">
    <el-table
      :data="ruleForm.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      border
      stripe
      style="width: 100%"
    >
      <el-table-column align="center" type="index" label="#" width="50"></el-table-column>
      <el-table-column align="center" prop="title" label="标题"></el-table-column>
      <el-table-column align="center" prop="author" label="作者" width="100"></el-table-column>
      <el-table-column align="center" label="类目" width="150">
        <template slot-scope="scope">
          <div v-if="scope.row.category==='其他'">
            <el-tag size="medium">{{ scope.row.category }}</el-tag>
          </div>
          <div v-if="scope.row.category==='工具类'">
            <el-tag size="medium" type="danger">{{ scope.row.category }}</el-tag>
          </div>
          <div v-if="scope.row.category==='Vue'">
            <el-tag size="medium" type="success">{{ scope.row.category }}</el-tag>
          </div>
          <div v-if="scope.row.category==='React'">
            <el-tag size="medium" type="info">{{ scope.row.category }}</el-tag>
          </div>
          <div v-if="scope.row.category==='JavaScript'">
            <el-tag size="medium" type="warning">{{ scope.row.category }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="source" label="来源" width="100"></el-table-column>
      <el-table-column align="center" label="重要性" width="200">
        <template slot-scope="scope">
        <el-rate v-model="scope.row.star" :colors="colors"></el-rate>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="date" label="发布时间" width="150"></el-table-column>
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
      :total="ruleForm.length"
    ></el-pagination>
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
      pageSize: 10,
      currentPage: 1,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  },
  methods: {
    Look(row){
      this.$router.push({path:"/detail",query:{id:row._id}})
    },
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
        //   console.log(res.data.data);
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
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
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