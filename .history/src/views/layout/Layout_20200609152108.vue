<template>
    <el-container>
      <el-header>
        <navheader></navheader>
      </el-header>
      <el-container>
        <el-aside height="100%">
          <navaside></navaside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
.el-container{
  height: 100%;
  width: 100%;
}
.el-header{
  padding: 0;
}
.el-aside{
  background: rgb(52, 64, 85);
}
</style>