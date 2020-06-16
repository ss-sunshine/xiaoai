<template>
  <div>
    <a class="btn f-a-j f14" @click="toggleShow">上传图片</a>
    <my-upload field="img" url="/api/upload" v-model="show" @crop-success="cropSuccess" :size="size"></my-upload>
    <img :src="avatar" />
  </div>
</template>

<script>
import "babel-polyfill";
import myUpload from "vue-image-crop-upload/upload-1.vue";
export default {
  name: "Crop",
  props: {},
  components: {
    "my-upload": myUpload
  },
  data() {
    return {
      show: false,
      avatar: "",
      size:2.1
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl) {
      this.avatar = imgDataUrl;
      console.log(imgDataUrl);
    }
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
</style>