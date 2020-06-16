<template>
 <div>
       <div class="p-tb-02 m-r-3 background">
         <el-button type="danger">查看</el-button>
       <el-button type="primary">发布</el-button>
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
  .p-tb-02{
    height: 4px;: 2px 0;
  }
}
</style>