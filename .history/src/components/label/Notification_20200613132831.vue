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
          <el-button type="primary" class="btn" @click="clickItem4">全部标为已读</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="`已读消息(${total1})`" name="second">
        <div class="backgroud">
          <div>
            <el-table
              :data="arr3"
              style="width: 100%"
              :show-header="false"
              :cell-style="{background:'#fff'}"
            >
              <el-table-column prop="datile" align="left"></el-table-column>
              <el-table-column prop="time" align="right"></el-table-column>
              <el-table-column width="110">
                <template slot-scope="scope">
                  <el-button @click="clickItem2(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-button type="danger" class="btn" @click="clickItem5">删除全部</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="`回收站(${total2})`" name="third">
        <div class="backgroud">
          <div>
            <el-table
              :data="arr4"
              style="width: 100%"
              :show-header="false"
              :cell-style="{background:'#fff'}"
            >
              <el-table-column prop="datile" align="left"></el-table-column>
              <el-table-column prop="time" align="right"></el-table-column>
              <el-table-column width="140">
                <template slot-scope="scope">
                  <el-button type="warning" @click="clickItem3(scope.$index, scope.row)">还原</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-button type="info" class="btn">清空回收站</el-button>
        </div>
      </el-tab-pane>
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
      item: [],
      arr1: [],
      item1: [],
      arr2: [],
      item2: [],
      flag: false,
      arr3: [],
      arr4: []
    };
  },
  methods: {
    clickItem1(index, row) {
      let id = row.id;
      this.item = this.arr.filter(row => {
        return row.id === id;
      });
      //   console.log(this.item);
      this.arr1.push(this.item[0]);
      //   console.log(this.arr1);
      this.arr = this.arr.filter(row => {
        return row.id !== id;
      });
    },
    clickItem2(index, row) {
      let id = row.id;
      this.item1 = this.arr1.filter(row => {
        return row.id === id;
      });
      //   console.log(this.item1);
      this.arr2.push(this.item1[0]);
      //   console.log(this.arr2);
      this.arr1 = this.arr1.filter(row => {
        return row.id !== id;
      });
    },
    clickItem3(index, row) {
      let id = row.id;
      this.item2 = this.arr2.filter(row => {
        return row.id === id;
      });
      //   console.log(this.item1);
      this.arr1.push(this.item2[0]);
      //   console.log(this.arr2);
      this.arr2 = this.arr2.filter(row => {
        return row.id !== id;
      });
    },
    clickItem4() {
      this.flag = true;
      if ((this.flag = true)) {
        // this.arr=''
        this.arr3 = this.arr1.concat(this.arr);
        // console.log( this.arr3);
        this.arr=[]
      }
    },
    clickItem5() {
      this.flag = true;
      // if ((this.flag = true)) {
      //   // this.arr=''
      //   this.arr4 = this.arr2.concat(this.arr3);
      //   console.log( this.arr4);
      //   // this.arr3=[]
      // }
    }
  },
  mounted() {
    this.arr3 = this.arr1;
    this.arr4 = this.arr2;
  },
  watch: {},
  computed: {
    total() {
      return this.arr.length;
    },
    total1() {
      return this.arr3.length;
    },
    total2() {
      return this.arr4.length;
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