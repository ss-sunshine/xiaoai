<template>
  <div class="content d-f">
    <div class="one"></div>
    <div class="one"></div>
    <div class="one"></div>
    <div class="one"></div>
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
  height: calc(100vh - 60px);
  background: rgb(240, 242, 245);
  position: relative;
  .one {
    flex: 1;
    height: 150px;
    background: white;
    margin: 10px;
}
}
</style>