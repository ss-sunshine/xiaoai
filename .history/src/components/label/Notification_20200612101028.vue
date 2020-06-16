<template>
  <div class="content f-j">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">已读消息</el-tab-pane>
      <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
      <el-tab-pane label="回收站" name="third">回收站</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  height: calc(100vh - 60px);
  background: rgb(240, 242, 245);
  position: relative;
  .el-menu {
    background-color: transparent;
    height: 60px;
    width: 100%;
    margin: 0 20px;
    .el-menu-item {
      background-color: transparent;
    }
  }
}
</style>