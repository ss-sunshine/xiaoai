<template>
 <div class="content p-t-2">
     <list></list>
 </div>
</template>

<script>
import list from '../../components/published/List'
 export default {
   name: 'Published',
   props: {
   },
   components: {
     List
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
  height: calc(100vh - 80px);
  background: rgb(240, 242, 245);
  position: relative;
}
</style>