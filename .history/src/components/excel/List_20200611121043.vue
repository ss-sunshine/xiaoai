<template>
  <div class="content">
    <el-table :data="arr">
      <el-table-column 
      prop="NAME"
      label="名称" 
      width="180">
      </el-table-column>
      <el-table-column 
      prop="GOODS_SERIAL_NUMBER"
      label="商品编号" 
      width="180">
      </el-table-column>
      <el-table-column 
      prop="ORI_PRICE"
      label="原价" 
      width="180">
      </el-table-column>
      <el-table-column 
      prop="PRESENT_PRICE"
      label="现价" 
      width="180">
      </el-table-column>
      <el-table-column label="操作">
        <el-button
          size="mini"
          @click="handleEdit(index)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(index)"
        >删除</el-button>
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
</style>