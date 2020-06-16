<template>
  <div class="content f-j">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="`未读消息(${total})`" name="first">
        <div class="backgroud">
          <div>
            <el-table
              :data="arr"
              style="width: 100%"
              :show-header="false"
              :cell-style="{background:'#fff'}"
            >
              <el-table-column prop="datile" align="left"></el-table-column>
              <el-table-column prop="time" align="right"></el-table-column>
              <el-table-column width="140">
                <template slot-scope="scope">
                  <el-button @click="clickItem1(scope.$index, scope.row)">标为已读</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-button type="primary" class="btn">全部标为已读</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">
          <div class="backgroud">
          <div>
            <el-table
              :data="arr1"
              style="width: 100%"
              :show-header="false"
              height="max"
              :cell-style="{background:'#fff'}"
            >
              <el-table-column prop="datile" align="left"></el-table-column>
              <el-table-column prop="time" align="right"></el-table-column>
              <el-table-column width="140">
                <template slot-scope="scope">
                  <el-button @click="clickItem2(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-button type="danger" class="btn">删除全部</el-button>
        </div>
      </el-tab-pane>
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
          id: 1,
          datile: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          id: 2,
          datile: "今晚12点整发大红包 , 先到先得",
          time: "2018-04-19 21:00:00"
        },
        {
          id: 3,
          datile: "【系统通知】您的优惠券已经过期",
          time: "2018-04-19 21:00:00"
        }
      ],
      item:[],
      arr1: [],
    };
  },
  methods: {
      clickItem1(index,row){
          let id=row.id
          this.arr=this.arr.filter(row=>{
              return row.id!==id
          })
          this.item=this.arr.filter(row=>{
              return row.id===id
          })
        //   console.log(this.item[0]);
        //   this.item.push(this.item[0])
        //   console.log(this.arr1);
      }
  },
  mounted() {},
  watch: {},
  computed: {
      total(){
          return this.arr.length
      }
  }
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
    .el-table {
      font-size: 16px;
    }
    .backgroud {
      padding: 0 20px;
      background: white;
      border-radius: 4px;
      .btn {
        margin: 20px 0;
      }
    }
  }
}
</style>