<template>
  <div class="content">
    <el-card class="box-card">
      <div>
        <div class="font-size">支持拖拽</div>
        <div class="datile f16 f-a p-l-3 m-tb-2">Element UI自带上传组件</div>
        <el-upload class="upload-demo" drag action="/api/upload" :auto-upload="true" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div>
        <div class="font-size m-t-2">支持裁剪</div>
        <div class="datile f16 f-a p-l-3 m-tb-2">vue-image-crop-upload</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Imgupload",
  props: {},
  components: {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl) {
      this.avatar = imgDataUrl;
      console.log(imgDataUrl);
    },
  },
  // events: {
  //   cropSuccess(imgDataUrl, field) {
  //     console.log("-------- crop success --------");
  //     this.imgDataUrl = imgDataUrl;
  //   },
  //   cropUploadSuccess(jsonData, field) {
  //     console.log("-------- upload success --------");
  //     console.log(jsonData);
  //     console.log("field: " + field);
  //   },
  //   cropUploadFail(status, field) {
  //     console.log("-------- upload fail --------");
  //     console.log(status);
  //     console.log("field: " + field);
  //   }
  // },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  height: calc(100vh - 80px);
  background: rgb(240, 242, 245);  //全屏设置背景颜色
  position: relative;
  padding: 20px 20px 0 20px;
  .font-size {
    font-size: 24px;
  }
  .datile {
    height: 60px;
    background: rgb(238, 238, 238);
    margin-right: 120px;
  }
  .btn{
    background: #409EFF;
    border-radius: 4px;
    width: 100px;
    height: 40px;
    color: white;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>