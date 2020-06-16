<template>
  <div>
    <!-- <modify v-if="num === arr.index"></modify> -->
    <div class="content">
      <el-table :data="arr.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column prop="NAME" label="名称" class="f-1" align="center"></el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" class="f-1" align="center"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" class="f-1" align="center"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" class="f-1" align="center"></el-table-column>
        <el-table-column label="操作" class="f-1" align="center">
          <div v-for="(item,index) in arr" :key="index">
            <el-button 
            type="primary" 
            @click="handleEdit(index)" 
            class="el-icon-edit"
            >修改</el-button>
            <el-button 
            type="danger" 
            @click="handleDelete(index)" 
            class="el-icon-delete"
            >删除</el-button>
            <div class="box1 f-j" v-if="num === index">
              <div class="modify">
                <div class="f-a m-b-2">
                  <div class="m-r-2">名称:</div>
                  <el-input v-model="value">{{item.NAME}}</el-input>
                </div>
                <div class="f-a m-b-2">
                  <div class="m-r-2">原价:</div>
                  <el-input v-model="value">{{item.ORI_PRICE}}</el-input>
                </div>
                <div class="f-a m-b-2">
                  <div class="m-r-2">现价:</div>
                  <el-input v-model="value">{{item.PRESENT_PRICE}}</el-input>
                </div>
              </div>
            </div>
          </div>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40 , 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
      ></el-pagination>
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
      currentPage: 1,
      pageSize: 10,
      num: ""
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          //    console.log(res.data.data);
          this.arr = res.data.data;
          //   console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index) {
      console.log(index);
      this.num = index;
    },
    handleDelete(index) {
      console.log(index);
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
.content {
  height: calc(100vh - 80px);
  background: rgb(240, 242, 245); //全屏设置背景颜色
  position: relative;
  padding: 20px 20px 0 20px;
}
.box1 {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  .modify {
    margin-top: 150px;
    background: white;
    padding: 80px 20px 20px 20px;
  }
}
</style>