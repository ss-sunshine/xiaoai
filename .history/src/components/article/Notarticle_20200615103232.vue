<template>
 <div>
     <div class="background">
       <div class="m-tb-02 m-r-3">
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
  .m-tb-02{
    margin: 2px 0;
  }
}
</style>