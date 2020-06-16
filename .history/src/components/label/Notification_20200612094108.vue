<template>
  <div class="content f-j">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">未读消息</el-menu-item>
      <el-menu-item index="2">已读消息</el-menu-item>
      <el-menu-item index="3">回收站</el-menu-item>
    </el-menu>
    <div class="line"></div>
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
  width: 100%;
  height: calc(100vh - 60px);
  background: rgb(240, 242, 245);
  position: relative;
  .el-menu{
      background-color: transparent;
      .el-menu-item{
          background-color: transparent;
      }
  } 
}
</style>