<template>
  <div>
    <div class="login-box f-c-a" :class="{'none':flag===true}">
      <div class="titli f-a-j f18 m-b-3">欢迎来到小爱后台管理系统</div>
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
          <el-form-item label="请输入验证码" prop="captcha">
            <div class="f-a">
              <el-input v-model="ruleForm.captcha"></el-input>
              <div class="captcha m-l-2"></div>
            </div>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="login">立即登录</el-button>
            <el-button type="primary" @click="registered">用户注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="registered f-c-a" v-if="flag===true">
      <div class="titli f-a-j f18 m-b-3">欢迎来到小爱后台管理系统</div>
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
            <div class="f-j-bw">
              <el-button type="primary" @click="registered1">立即注册</el-button>
              <el-button type="primary" @click="login1">立即登录</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        captcha: ""
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
        ],
        captcha: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ]
      },
      flag: false
    };
  },
  methods: {
    login() {
      //validate是做验证的  里面有一个valid属性是布尔值  如果为true就是代表表单全部输入正确  如果为false  就代表表单输入不正确
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message.success("登录成功");
          // this.$router.push("/home");
        } else {
          this.$message.error("输入有误，请重新输入");
          return false;
        }
      });
    },
    registered() {
      this.flag = true;
    },
    registered1() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios.post('/api/user/register')
          // this.$message.success("注册成功");
        } else {
          this.$message.error("输入有误，请重新输入");
          return false;
        }
      });
    },
    login1() {
      this.flag = false;
      // this.reload();
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.none{
  display: none;
}
.registered {
  width: 500px;
  height: 280px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 10, 0.3);
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .titli {
    padding: 15px 0;
    width: 100%;
    font-weight: 900;
    border-bottom: 1px solid #dcdfe6;
  }
  .login {
    width: 400px;
    .btn {
      margin-bottom: 0;
    }
    .captcha {
      width: 150px;
      height: 30px;
      background: skyblue;
    }
  }
}
.login-box {
  width: 500px;
  height: 340px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 10, 0.3);
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .titli {
    padding: 15px 0;
    width: 100%;
    font-weight: 900;
    border-bottom: 1px solid #dcdfe6;
  }
  .login {
    width: 400px;
    .btn {
      margin-bottom: 0;
    }
    .captcha {
      width: 150px;
      height: 30px;
      background: skyblue;
    }
  }
}
</style>