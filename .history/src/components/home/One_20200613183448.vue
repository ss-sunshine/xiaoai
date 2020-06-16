<template>
  <div class="d-f m-lr-14">
    <el-card class="box-card m-lr-06 f-1 one f-aj-bw">
      <div>
        <i class="iconfont icon-renqunfenxi"></i>
      </div>
      <div>
        <div>New Visits</div>
        <div>{{obj.visits}}</div>
      </div>
    </el-card>
    <el-card class="box-card m-lr-06 f-1 one f-aj-bw">
      <div>
        <i class="iconfont icon-renqunfenxi"></i>
      </div>
      <div>
        <div>Messages</div>
        <div>{{obj.Messages}}</div>
      </div>
    </el-card>
    <el-card class="box-card m-lr-06 f-1 one f-aj-bw">
      <div>
        <i class="iconfont icon-renqunfenxi"></i>
      </div>
      <div>
        <div>Purchases</div>
        <div>{{obj.Purchases}}</div>
      </div>
    </el-card>
    <el-card class="box-card m-lr-06 f-1 one f-aj-bw">
      <div>
        <i class="iconfont icon-renqunfenxi"></i>
      </div>
      <div>
        <div>Shoppings</div>
        <div>{{obj.Shoppings}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      obj: {}
    };
  },
  methods: {
    getData() {
      axios
        .get("api/homeData")
        .then(res => {
          // console.log(res.data.data);
          this.obj = res.data.data;
          console.log(this.obj);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
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