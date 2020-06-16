<template>
 <div class="content p-t-4">
   <one></one>
 </div>
</template>

<script>
import One from '../components/home/One'
 export default {
   name: 'Home',
   props: {
   },
   components: {
     One
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
}
</style>