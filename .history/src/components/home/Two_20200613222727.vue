<template>
  <div class="m-t-5">
    <el-card class="box-card m-lr-2">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
      this.chartSettings = {
        metrics: ['expected', 'actual'],
        dimension: ['date']
      }
    //   this.chartData= {
    //       columns: ['date','expected', 'actual'],
    //       arr: []
    //     }
    return {
        chartData: {
          columns: ['actual','date', 'expected'],
          arr: []
        }
    };
  },
  methods: {
      getData(){
          axios.get('api/homeChat').then(res=>{
            //   console.log(res.data.data);
            this.chartData.arr=res.data.data
            console.log(this.chartData.arr);
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