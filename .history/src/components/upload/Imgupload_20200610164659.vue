<template>
  <div class="content">
      <el-card class="box-card">
        <div>
          <div>支持拖拽</div>
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
  height: calc(100vh - 60px);
  background: rgb(240, 242, 245);
  position: relative;
  .box-card{
    margin: 20px 20px 0 20px;
  }
}
</style>