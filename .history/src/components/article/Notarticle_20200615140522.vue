<template>
  <div>
    <div class="color m-lr-2 f-a p-r">
      <div class="p-a-r m-r-3">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
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
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input></el-input>
        </el-form-item>
        <div class="d-f">
          <div>
            <el-form-item label="作者" prop="author">
              <el-input></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="类目" prop="category">
              <el-select placeholder="请选择">
                <el-option label></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="来源" prop="source">
              <el-select placeholder="请选择">
                <el-option label></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="重要性" prop="star">
              <el-select placeholder="请选择">
                <el-option label></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="m-r-2">
            <el-form-item label="发布时间" prop="date">
              <el-time-picker placeholder="选择时间"></el-time-picker>
            </el-form-item>
          </div>
        </div>
        <mavon-editor v-model="text" />
      </el-form>
      <div class="m-t-3 f-j">
        <el-button type="primary">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Notarticle",
  props: {},
  components: {},
  data() {
    return {
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
        title:[
          { required: true, message: '请输入文章标题', trigger: 'blur' }
        ],
        abstract:[
           { required: true, message: '请输入文章摘要', trigger: 'blur' }
        ],
        author:[
          { required: true, message: '请输入作者名称', trigger: 'blur' }
        ],
        category:[
          { required: true, message: '请输入类目', trigger: 'blur' }
        ],
        source:[
          { required: true, message: '请输入来源', trigger: 'blur' }
        ],
        star:[
          { required: true, message: '请输入重要性', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data.data);
          // this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData()
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
