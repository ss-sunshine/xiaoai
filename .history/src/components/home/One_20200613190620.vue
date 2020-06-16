<template>
  <div class="d-f m-lr-14">
    <el-card class="box-card m-lr-06 f-1 one">
      <div class="f-aj-bw m-lr-2">
        <i class="iconfont icon-renqunfenxi"></i>
        <div class="color">
          <div class="m-b-6 f16">New Visits</div>
          <div class="f20">{{obj.visits}}</div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card m-lr-06 f-1 one">
      <div class="f-aj-bw m-lr-2">
        <i class="iconfont icon-xiaoxi"></i>
        <div class="color">
          <div class="m-b-6 f16">Messages</div>
          <div class="f20">{{obj.messages}}</div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card m-lr-06 f-1 one">
      <div class="f-aj-bw m-lr-2">
        <i class="iconfont icon-qian"></i>
        <div class="color">
          <div class="m-b-6 f16">Purchases</div>
          <div class="f20">{{obj.purchases}}</div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card m-lr-06 f-1 one">
      <div class="f-aj-bw m-lr-2">
        <i class="iconfont icon-gouwuche"></i>
        <div class="color">
          <div class="m-b-6 f16">Shoppings</div>
          <div class="f20">{{obj.shopping}}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "One",
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
  .icon-renqunfenxi {
    font-size: 70px !important;
    color: rgb(68, 200, 197);
  }
  .color {
    color: rgb(144, 147, 153);
    .m-b-6 {
      margin-bottom: 6px;
    }
  }
  .icon-xiaoxi{
    font-size: 56px !important;
    color: rgb(59,162,244);
  }
  .icon-qian{
    font-size: 60px !important;
    color: rgb(242,85,111);
    margin-bottom: 4px;
  }
  .icon-gouwuche{
    font-size: 70px !important;
    color: rgb(254,186,133);
  }
}
</style>