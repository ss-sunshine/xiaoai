<template>
  <div>
    <div class="color m-lr-2 f-a p-r">
      <div class="p-a-r m-r-3">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div>
      <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="name">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="name">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :rules="rules" class="demo-form-inline">
      <el-form-item label="作者">
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="类目" required>
        <el-select placeholder="请选择">
          <el-option label="区域一"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源" required>
        <el-select placeholder="请选择">
          <el-option label="区域一"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="重要性" required>
        <el-select placeholder="请选择">
          <el-option label="区域一"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notarticle",
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
.color {
  background: rgb(89, 165, 134);
  height: 48px;
}
</style>
