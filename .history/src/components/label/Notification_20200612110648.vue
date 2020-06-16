<template>
  <div class="content f-j">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
        <el-table :data="arr" style="width: 100%" :show-header='false'>
          <el-table-column prop="datile"></el-table-column>
          <el-table-column prop="time"></el-table-column>
        </el-table>
      </el-tab-pane>
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
      activeName: "first",
      arr: [
        {
          datile: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          datile: "今晚12点整发大红包 , 先到先得",
          time: "2018-04-19 21:00:00"
        },
        {
          datile: "【系统通知】您的优惠券已经过期",
          time: "2018-04-19 21:00:00"
        }
      ]
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
  .el-tabs {
    width: 100%;
    margin: 20px 20px 0 20px;
    .el-menu-item {
      background-color: transparent;
    }
  }
}
</style>