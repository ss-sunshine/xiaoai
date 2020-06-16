<template>
  <div class="d-f m-t-4 m-b-2 m-lr-15">
    <el-card class="box-card f-2">
      <el-table :data="arr" :cell-style="{background:'#fff'}">
        <el-table-column prop="num" label="Order_No" align="center"></el-table-column>
        <el-table-column prop="price" label="Price" align="center"></el-table-column>
        <el-table-column prop="status" label="Status" align="center">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.status === 0 ">pending</el-tag>
             <el-tag type="success" v-if="scope.row.status === 1 ">success</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card f-1 m-lr-1"></el-card>
    <el-card class="box-card f-1"></el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Frou",
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
        .get("/api/orderData")
        .then(res => {
          console.log(res.data.data);
          this.arr = res.data.data;
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