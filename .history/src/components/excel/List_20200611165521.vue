<template>
  <div>
    <!-- <modify v-if="num === arr.index"></modify> -->
    <div class="content">
      <el-input v-model="value" placeholder="请输入您想搜索的商品名称" class="inp m-b-2" />
      <el-table :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column prop="NAME" label="名称" class="f-1" align="center"></el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" class="f-1" align="center"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" class="f-1" align="center"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" class="f-1" align="center"></el-table-column>
        <el-table-column label="操作" class="f-1" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              class="el-icon-edit"
            >修改</el-button>
            <!-- <div class="box1 f-j">
            <div class="modify" v-if="num === scope.$index">
              <div class="f-a">
                <div class="m-r-2">名称:</div>
                <el-input v-model="value">{{scope.row.NAME}}</el-input>
              </div>
            </div>
            </div>-->
            <el-button
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              class="el-icon-delete"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="m-tb-2"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40 , 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
      ></el-pagination>
      <div class="d-f">
        <div class="m-r-4">
          <el-button type="primary" class="el-icon-edit">导出xls</el-button>
        </div>
        <el-button type="danger" class="el-icon-edit">导出csv</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modify from "./Modify";
export default {
  name: "List",
  props: {},
  components: {
    Modify
  },
  data() {
    return {
      arr: [],
      list:[],
      currentPage: 1,
      pageSize: 10,
      num: "",
      value: ""
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          //    console.log(res.data.data);
          this.arr = res.data.data;
          this.list = this.arr
          //   console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.num = index;
    },
    handleDelete(index, row) {
      console.log(index, row);
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
    this.list = this.arr
  },
  watch: {
      value(val){
          this.list = this.arr.filter(item=>{
              return JSON.stringify(item).includes(val)
          })
      }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  height: calc(100vh - 80px);
  background: rgb(240, 242, 245); //全屏设置背景颜色
  position: relative;
  padding: 20px 20px 0 20px;
  .inp {
    width: 300px;
    height: 40px;
    border-radius: 4px;
  }
}
</style>