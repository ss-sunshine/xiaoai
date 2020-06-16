<template>
  <div class="content">
      <el-card class="box-card">
        <div>
          <div class="font-size m-b-2">支持拖拽</div>
          <div class="datile">Element UI自带上传组件</div>
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  height: calc(100vh - 80px);
  background: rgb(240, 242, 245);
  position: relative;
  padding: 20px 20px 0 20px;
  .font-size{
    font-size: 24px;
  }
  .datile{
    height: 60px;
    background: rgb(238,238,238);
  }
}
</style>