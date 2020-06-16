<template>
  <div class="d-f m-lr-14">
   <div>
      <el-card class="box-card m-lr-06 f-1 one">
      <i class="iconfont icon-renqunfenxi"></i>
    </el-card>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      num:[]
    };
  },
  methods: {
    getData(){
      axios.get('api/homeData').then(res=>{
        // console.log(res.data.data);
        this.num = res.data.data
        console.log(this.num);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.one {
  height: 110px;
}
</style>