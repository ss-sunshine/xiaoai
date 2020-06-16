<template>
 <div class="content p-t-2">
     <notarticle></notarticle>
 </div>
</template>

<script>
import Notarticle from '../../components/article/Notarticle'
 export default {
   name: 'Article',
   props: {
   },
   components: {
     Notarticle
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