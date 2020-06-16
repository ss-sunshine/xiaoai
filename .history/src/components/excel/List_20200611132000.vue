<template>
  <div class="content">
    <el-table :data="arr">
      <el-table-column prop="NAME" label="名称" class="f-1" text-align:center></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" class="f-1"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" class="f-1"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" class="f-1"></el-table-column>
      <el-table-column label="操作" class="f-1">
        <el-button size="mini" @click="handleEdit(index)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(index)">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  props: {},
  components: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          //    console.log(res.data.data);
          this.arr = res.data.data;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
  .el-table td,
  .el-table th {
    text-align: center;
  }
}
</style>