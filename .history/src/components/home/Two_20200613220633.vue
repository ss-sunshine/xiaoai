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
    return {
        chartData: {
          columns: ['date','expected', 'actual'],
          arr: []
        }
    };
  },
  methods: {
      getData(){
          axios.get('api/homeChat').then(res=>{
            //   console.log(res.data.data);
            this.arr=res.data.data
            console.log(this.arr);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mounted() {
      this.getData()
      this.arr=res.data.data
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>