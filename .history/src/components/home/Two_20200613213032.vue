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
        dimension: ['日期']
      }
    return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': 'Mon', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': 'Tue', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': 'Wed', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': 'Thu', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': 'Fri', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': 'Sat', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
            { '日期': 'Sun', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
    };
  },
  methods: {
      getData(){
          axios.get('api/homeChat').then(res=>{
              console.log(res);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>