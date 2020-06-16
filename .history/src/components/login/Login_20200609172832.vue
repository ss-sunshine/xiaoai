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
          <el-form-item label="请输入验证码" prop="code">
            <div class="f-a">
              <el-input v-model="ruleForm.code"></el-input>
              <div class="code m-l-2"  v-html="code" @click="getCode"></div>
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
import axios from 'axios'
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        code:""
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
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          },
        ]
      },
      flag: false,
      code:""
    };
  },
  methods: {
    login() {
      //validate是做验证的  里面有一个valid属性是布尔值  如果为true就是代表表单全部输入正确  如果为false  就代表表单输入不正确
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios.post('/api/user/login',{
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            code: this.ruleForm.code,
          }).then(res=>{
            // console.log(res.data);
            if(res.data.code === 200){
              this.$message.success("登录成功");
              sessionStorage.setItem('ruleForm', JSON.stringify(res.data))
              this.ruleForm.username='';
              this.ruleForm.password='';
              this.ruleForm.code='';
              this.$router.push("/");
            }else{
              this.$message.error(res.data.message);
            }
          }).catch(err=>{
            console.log(err);
          })
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
          axios.post('/api/user/register',{
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }).then(res=>{
            if(res.data.code === 200){
              this.$message.success("注册成功");
              this.ruleForm.username='';
              this.ruleForm.password='';
            }else{
              this.$message.error(res.data.message);
              this.ruleForm.username='';
              this.ruleForm.password='';
            }
          }).catch(err=>{
            console.log(err);
          })
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
    getCode(){
      axios.get('/api/captcha').then(res=>{
        this.code = res.data
        // console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getCode()
  },
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
    .code {
      
      height: 40px;
      &:hover{
        cursor: pointer;
      }
    }
  }
}
</style>