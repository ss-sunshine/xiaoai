<template>
  <div>
    <div class="content">
      <el-input v-model="value" placeholder="请输入您想搜索的商品名称" class="inp m-b-2" />
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      >
        <el-table-column prop="NAME" label="名称" class="f-1" align="center"></el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" class="f-1" align="center"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" class="f-1" align="center"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" class="f-1" align="center"></el-table-column>
        <el-table-column label="操作" class="f-1" align="center">
          <template slot-scope="scope">
            <div class="f-j">
              <el-button
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                class="el-icon-edit"
              >修改</el-button>
              <el-dialog :visible.sync="dialogFormVisible" width="30%" top="20vh">
                <el-form :model="form">
                  <el-form-item label="名称:" :label-width="formLabelWidth">
                    <el-input v-model="form.NAME" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="原价:" :label-width="formLabelWidth">
                    <el-input v-model="form.ORI_PRICE" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="现价:" :label-width="formLabelWidth">
                    <el-input v-model="form.PRESENT_PRICE" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>

              <div class="m-l-1">
                <el-button
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  class="el-icon-delete"
                >删除</el-button>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="m-tb-2"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40 , 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.length"
      ></el-pagination>
      <div class="d-f">
        <div class="m-r-4">
          <download-excel
            :fields="json_fields"
            :data="json_data"
            :before-generate="startDownload"
            :before-finish="finishDownload"
            name="导出数据.xls"
            type="xls"
          >
            <el-button type="primary">导出xls</el-button>
          </download-excel>
        </div>
        <download-excel
          :fields="json_fields"
          :data="json_data"
          :before-generate="startDownload"
          :before-finish="finishDownload"
          name="导出数据.xls"
          type="csv"
        >
          <el-button type="danger">导出csv</el-button>
        </download-excel>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      list: [],
      currentPage: 1,
      pageSize: 10,
      num: "",
      value: "",
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "44px",
      multipleSelection: [],
      json_fields: {
        名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      //表数据
      json_data: [],
      //表描述
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ]
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          //    console.log(res.data.data);
          this.arr = res.data.data;
          this.list = this.arr;
          //   console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      // console.log(index, row);
      //   this.form.NAME = row.NAME;
      //   this.form.ORI_PRICE = row.ORI_PRICE;
      //   this.form.PRESENT_PRICE = row.PRESENT_PRICE;
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
      let num = row.GOODS_SERIAL_NUMBER;
      this.arr = this.arr.filter(row => {
        return row.GOODS_SERIAL_NUMBER !== num;
      });
      this.list = this.arr.filter(row => {
        return row.GOODS_SERIAL_NUMBER !== num;
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    startDownload() {
      this.json_data = this.list.map(item => {
        if (item.AMOUNT === 10000) {
          return item;
          // console.log(item);
        }
      });
      if (this.json_data.length === 0) {
        this.$message({
          message: "警告，没有数据",
          type: "warning"
        });
      }
    },
    finishDownload() {
      this.json_data = this.list.map(item => {
        if (item.AMOUNT === 10000) {
          return item;
          console.log(item);
        }
      });
      this.$message({
        message: "恭喜，数据导出成功",
        type: "success"
      });
    }
  },
  mounted() {
    this.getData();
    this.list = this.arr;
  },
  watch: {
    value(val) {
      this.list = this.arr.filter(item => {
        return JSON.stringify(item).includes(val);
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  height: calc(100vh - 80px);
  background: rgb(240, 242, 245); //全屏设置背景颜色
  position: relative;
  padding: 20px 20px 0 20px;
  .inp {
    width: 300px;
    height: 40px;
    border-radius: 4px;
  }
}
</style>