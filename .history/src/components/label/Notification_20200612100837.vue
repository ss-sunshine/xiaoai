<template>
  <div class="content f-j">
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color='#000'
      active-text-color='#409EFF'
    >
      <el-menu-item index="1">未读消息</el-menu-item>
      <el-menu-item index="2">已读消息</el-menu-item>
      <el-menu-item index="3">回收站</el-menu-item>
    </el-menu>
    <div class="line"></div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
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
        activeIndex:'1',
        activeName: 'second'
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
  .el-menu{
      background-color: transparent;
      height: 60px;
      width: 100%;
      margin: 0 20px;
      .el-menu-item{
          background-color: transparent;
      }
  }
}
</style>