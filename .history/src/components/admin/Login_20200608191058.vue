<template>
  <div class="container p-r f-a">
    <div class="login-box f-c-a-j">
      <h2 class="m-b-4">欢迎来到cNode社区</h2>
      <div class="login">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="110px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="login">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      //验证规则
      rules: {
        //表单属性prop的值
        //每一个验证都是数组
        //数组里面放验证规则，验证规则又是一个对象
        //required:是否必填  message：错误提示  trigger：触发方式（通常都是blur，失去焦点之后做验证）
        //最小和最大输入长度  min和 max
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      //validate是做验证的  里面有一个valid属性是布尔值  如果为true就是代表表单全部输入正确  如果为false  就代表表单输入不正确
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message.success("登录成功");
          this.$router.push("/home");
        } else {
          this.$message.error("输入有误，请重新输入");
          return false;
        }
      });
      sessionStorage.setItem("ruleForm", JSON.stringify(this.ruleForm));
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.login-box {
  width: 450px;
  height: 300px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 15, 0.3);
  position: absolute;
  margin-top: 25%;
  .login {
    width: 400px;
    .btn {
      margin-bottom: 0;
    }
  }
}
</style>