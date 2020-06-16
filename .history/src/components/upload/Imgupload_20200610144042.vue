<template>
  <div class="d-f container">
    <div class="navaside"></div>
    <div class="content">
      <div class="center">
        <div class="item">
          <div>支持拖拽</div>
          <div class="detail f-a">Element UI自带上传组件</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Imgupload",
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
  .center {
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
}
</style>