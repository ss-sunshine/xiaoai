<template>
  <div>
    <el-container>
      <el-header>
        <navheader></navheader>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navheader from '../../components/layout/Navheader'
export default {
  name: "",
  props: {},
  components: {
    Navheader
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
</style>