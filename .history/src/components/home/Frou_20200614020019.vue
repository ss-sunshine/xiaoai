<template>
 <div class="d-f m-t-4">
    <el-card class="box-card f-2 m-l-2">

    </el-card>
     <el-card class="box-card f-1 m-lr-2">
      
    </el-card>
    <el-card class="box-card f-1 m-r-2">
      
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
 export default {
   name: 'Frou',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
        getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          console.log(res.data.data);
        //   this.chartData.rows = res.data.data;
        //   this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
   },
   mounted() {
       this.getData();
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>