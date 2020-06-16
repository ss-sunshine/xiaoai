<template>
 <div class="content p-t-2">
     <lookdetil></lookdetil>
 </div>
</template>

<script>
import Lookdetil from '../../components/article/Lookdetil'
 export default {
   name: '',
   props: {
   },
   components: {
       Lookdetil
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