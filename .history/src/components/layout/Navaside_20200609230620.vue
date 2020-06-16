<template>
  <div>
      <div class="aside"></div>
  </div>
</template>

<script>
export default {
  name: "Navaside",
  props: {},
  components: {},
  data() {
    return {
      navtitle:[
        {
          icon:'el-icon-location',
          name:'首页',
          path:'/'
        },
        {
          icon:'el-icon-menu',
          name:'已发布',
          path:'/published'
        },
        {
          icon:'el-icon-s-data',
          name:'统计',
          path:'/statistics'
        },
        {
          icon:'el-icon-check',
          name:'发表文章',
          path:'/article'
        },
        {
          icon:'el-icon-price-tag',
          name:'标签页',
          path:'/label'
        },
        {
          icon:'el-icon-download',
          name:'导出excel',
          path:'/excel'
        },
        {
          icon:'el-icon-upload2',
          name:'图片上传',
          path:'/upload'
        },
      ]
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