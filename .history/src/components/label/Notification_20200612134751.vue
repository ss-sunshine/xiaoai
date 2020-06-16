<template>
  <div class="content f-j">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
        <div class="backgroud">
          <el-table :data="arr" style="width: 100%" :show-header="false" height='max'>
            <el-table-column prop="datile" align="left"></el-table-column>
            <el-table-column prop="time" align="right"></el-table-column>
            <el-table-column width="140">
              <template slot-scope="scope">
                <el-button @click="handleEdit(scope.$index, scope.row)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" class="btn">全部标为已读</el-button>
        </div>
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
    .el-table{
        font-size: 16px;
    }
    .backgroud {
      padding: 0 20px;
      background: white;
      border-radius: 4px;
      .btn{
          margin: 20px 0;
      }
    }
  }
}
</style>