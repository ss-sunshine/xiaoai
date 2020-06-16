<template>
  <div class="content p-t-4">
   <div class="d-f">
      <div class="one m-r-1"></div>
    <div class="one m-r-1"></div>
    <div class="one m-r-1"></div>
    <div class="one"></div>
   </div>
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
.content {
  width: 100%;
  height: calc(100vh - 100px);
  background: rgb(240, 242, 245);
  position: relative;
  .one {
    flex: 1;
    height: 150px;
    background: white;
}
}
</style>