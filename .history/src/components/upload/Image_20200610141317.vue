<template>
  <div>
     <div class="d-f container">
    <div class="navaside"></div>
    <div class="content f-c-a">
      <h2 class="m-b-3">期待您的下次光临</h2>
      <el-button type="primary" @click="clickItem">确定退出</el-button>
    </div>
  </div>
    <!-- <div class="navaside"></div>
    <div class="content">
      <div class="container">
        <div class="content">
          <div>支持拖拽</div>
          <div class="detail f-a">Element UI自带上传组件</div>
        </div>
        <div></div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Image",
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
.navaside {
  width: 200px;
}
.content {
  margin: auto;
  margin-top: 180px;
}
</style>