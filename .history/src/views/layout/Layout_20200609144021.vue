<template>
  <div>
    <el-container>
      <el-header>
        <navheader class="header"></navheader>
      </el-header>
      <el-container>
        <el-aside>
          <navaside></navaside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
.header {
  height: 60px;
  background: rgb(46, 94, 133);
}
</style>