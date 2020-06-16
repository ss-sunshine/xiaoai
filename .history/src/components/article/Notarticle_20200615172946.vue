<template>
  <div>
    <div class="color m-lr-2 f-a p-r">
      <div class="p-a-r m-r-3">
        <el-button type="danger" @click="look">查看</el-button>
        <el-button type="primary" @click="article">发布</el-button>
      </div>
    </div>
    <div class="m-lr-2 p-t-3">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <div class="d-f">
          <div class="f-1">
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
          </div>
          <div class="f-1">
            <el-form-item label="类目" prop="category">
              <el-select v-model="ruleForm.category" placeholder="请选择">
                <el-option label="Vue" value="其他"></el-option>
                <el-option label="React" value="其他"></el-option>
                <el-option label="Node.js" value="其他"></el-option>
                <el-option label="性能优化" value="其他"></el-option>
                <el-option label="JavaScript" value="其他"></el-option>
                <el-option label="小程序" value="其他"></el-option>
                <el-option label="工具类" value="其他"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="f-1">
            <el-form-item label="来源" prop="source">
              <el-select v-model="ruleForm.source" placeholder="请选择">
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                <el-option label="与他人合作" value="与他人合作"></el-option>
              </el-select>.
            </el-form-item>
          </div>
          <div class="f-1">
            <el-form-item label="重要性" prop="star">
              <el-select v-model="ruleForm.star" placeholder="请选择">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
                <el-option label="5" value="5"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="m-r-2 f-1">
            <el-form-item label="发布时间" prop="date">
              <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择时间"></el-date-picker>
            </el-form-item>
          </div>
        </div>
        <mavon-editor v-model="ruleForm.text" />
      </el-form>
      <div class="m-t-3 f-j">
        <el-button type="primary" @click="article">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Notarticle",
  props: {},
  components: {},
  data() {
    return {
      flag:false,
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        date: ""
      },
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        abstract: [
          { required: true, message: "请输入文章摘要", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入作者名称", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请输入类目", trigger: "blur" }
        ],
        source: [{ required: true, message: "请输入来源", trigger: "blur" }],
        star: [{ required: true, message: "请输入重要性", trigger: "blur" }]
      }
    };
  },
  methods: {
    look(){
      this.flag=true
      this.$router.push('/look')
    },
    article() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios.post("/api/article/create", {
            title: this.ruleForm.title,
            abstract: this.ruleForm.abstract,
            author: this.ruleForm.author,
            category: this.ruleForm.category,
            source: this.ruleForm.source,
            star: this.ruleForm.star,
            text: this.ruleForm.text,
            date: this.ruleForm.date
          }).then(res=>{
            if(res.data.code === 200){
              this.$message.success("发布成功");
              // localStorage.setItem('article', JSON.stringify(res.data.data[0]))
              this.ruleForm.title=''
              this.ruleForm.abstract=''
              this.ruleForm.author=''
              this.ruleForm.category=''
              this.ruleForm.source=''
              this.ruleForm.star=''
              this.ruleForm.text=''
              this.ruleForm.date=''
            }else{
              this.$message.error("发布失败");
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      });
    },
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data);
          // this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
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
