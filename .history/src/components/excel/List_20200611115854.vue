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
      <el-table-column label="操作">
        <div v-for="(item) in arr" :key="item.id">
          <div>{{ item.NAME }}</div>
        </div>
        <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>-->
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