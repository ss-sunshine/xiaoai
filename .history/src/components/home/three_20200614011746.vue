<template>
 <div class="d-f m-t-4">
    <el-card class="box-card f-1">
        <ve-radar :data="chartData"></ve-radar>
    </el-card>
  </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
          chartData: {
          columns: [],
          rows: []
        },
     }
   },
   methods: {
        getData(){
          axios.get('/api/radarChat').then(res=>{
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
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>