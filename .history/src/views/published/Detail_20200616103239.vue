<template>
 <div class="content p-t-2">
   <lookdetail></lookdetail>
 </div>
</template>

<script>
import Lookdetail from '../../components/published/Lookdetail'
 export default {
   name: 'Detail',
   props: {
   },
   components: {
Lookdetail
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