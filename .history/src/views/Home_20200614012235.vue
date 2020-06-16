<template>
 <div class="content p-t-5">
   <one></one>
   <two></two>
   <three></three>
 </div>
</template>

<script>
import One from '../components/home/One'
import Two from '../components/home/Two'
import Three from '../components/home/Three'
 export default {
   name: 'Home',
   props: {
   },
   components: {
     One,
     Two,
     Three
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
  height: calc(100vh - 110px);
  background: rgb(240, 242, 245);
  position: relative;
}
</style>