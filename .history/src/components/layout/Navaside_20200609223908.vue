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
          path:'/'
        }
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