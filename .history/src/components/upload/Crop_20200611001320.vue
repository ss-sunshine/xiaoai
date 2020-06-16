<template>
  <div>
    <a class="btn f-a-j f14" @click="toggleShow">上传图片</a>
    <my-upload field="img" url="/api/upload" v-model="show" @crop-success="cropSuccess"></my-upload>
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
      avatar: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>