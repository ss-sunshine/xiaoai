<template>
  <div>
      <navheader></navheader>
    <div class="d-f p-r">
        <navaside></navaside>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navheader from "../../components/layout/Navheader";
import Navaside from "../../components/layout/Navaside";
export default {
  name: "Layout",
  props: {},
  components: {
    Navheader,
    Navaside
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
// .el-header {
//   padding: 0;
//   position: fixed;
//   width: 100%;
//   z-index: 99;
// }
// .el-aside {
//   background: rgb(52, 64, 85);
//   position: fixed;
//   height: 100%;
//   margin-top: 60px;
// }
// .el-main {
//   margin-top: 60px;
//   padding: 0;
//   background: rgb(240,242,245);
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
// }
</style>