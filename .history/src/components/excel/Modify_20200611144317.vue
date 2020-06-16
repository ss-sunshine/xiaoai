<template>
 <div class="box1 f-j">
            <div v-for="(item,index) in arr" :key="index">
                <div class="modify" v-if="num === scope.$index">
              <div class="f-a">
                <div class="m-r-2">名称:</div>
                <el-input v-model="value">{{scope.row.NAME}}</el-input>
              </div>
            </div>
            </div>
          </div>
</template>

<script>
 export default {
   name: '',
   props: {
       arr:{
           type:Array
       }
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

</style>