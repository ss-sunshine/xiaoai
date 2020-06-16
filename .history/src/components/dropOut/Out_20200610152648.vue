<template>
  <div class="d-f container">
    <div class="navaside"></div>
    <div class="content f-c-a">
      <h2 class="m-b-3">期待您的下次光临</h2>
      <el-button type="primary" @click="clickItem">确定退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "",
  props: {},
  components: {},
  data() {
    return {
      flag: false
    };
  },
  methods: {
    clickItem() {
      this.flag = true;
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if ((this.flag = true)) {
            sessionStorage.clear();
            this.$router.push('/admin')
          }
        })
        .catch(() => {});
    }
  },
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