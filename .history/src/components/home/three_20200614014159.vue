<template>
  <div class="d-f m-t-4">
    <el-card class="box-card f-1 m-l-2">
      <ve-radar :data="chartData"></ve-radar>
    </el-card>
     <el-card class="box-card f-1 m-lr-2">
      <ve-pie :data="ringtData" :settings="chartSettings"></ve-pie>
    </el-card>
    <el-card class="box-card f-1 m-r-2">
      <ve-histogram :data="homeData"></ve-histogram>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Three",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
        roseType: 'radius'
      }
    return {
      chartData: {
        columns: [],
        rows: []
      },
      ringtData: {
        columns: [],
        rows: []
      },
      homeData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/radarChat")
        .then(res => {
          console.log(res.data.data);
          // this.chartData.rows = res.data.data;
          // this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRing() {
      axios
        .get("/api/ringChat")
        .then(res => {
          console.log(res.data.data);
          this.ringtData.rows = res.data.data;
          this.ringtData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHome() {
      axios
        .get("/api/homeData")
        .then(res => {
          console.log(res.data.data);
          this.homeData.rows = res.data.data;
          this.homeData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.getRing();
    this.getHome()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>