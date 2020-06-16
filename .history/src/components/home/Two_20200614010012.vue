<template>
  <div class="m-t-5">
    <el-card class="box-card m-lr-2">
        <ve-line :data="chartData"></ve-line>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Two",
  props: {},
  components: {},
  data() {
    return {
        chartData: {
          columns: [],
          rows: []
        },
        series:{
            type:'line',
            lineStyle:{
                noemal:{
                    color:rgb(253,39,104),
                    width:2
                }
            }
        }
    };
  },
  methods: {
      getData(){
          axios.get('/api/homeChat').then(res=>{
              console.log(res.data.data);
            this.chartData.rows = res.data.data
            this.chartData.columns = Object.keys(res.data.data[0])
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mounted() {
      this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>