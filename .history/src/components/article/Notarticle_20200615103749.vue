<template>
 <div>
     <div class="background p-r">
       <div class="p-tb-02 m-r-3 p-a-r">
         <el-button type="danger">查看</el-button>
       <el-button type="primary">发布</el-button>
       </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: 'Notarticle',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.background{
  background: rgb(89,165,134);
  margin: 0 20px;
  z-index: 99999;
  .p-tb-02{
    padding: 2px 0;
  }
}
</style>