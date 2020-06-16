<template>
  <div class="nav f-aj-bw p-lr-3 f18">
    <div class="f-a">
      欢迎
      <div class="uline p-lr-1">{{ruleForm.username}}</div>来到小爱后台管理系统
    </div>
    <div class="f-a">
      <div>早上好, 亲爱的</div>
      <div class="uline">{{ruleForm.username}}</div>
      <div class="m-l-3 el-icon-time"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navheader",
  props: {},
  components: {},
  data() {
    return {
      time: ""
    };
  },
  methods: {
    
  },
  mounted() {
    this.time =sessionStorage.getItem('user.date');
    console.log(this.time);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  color: white;
  height: 60px;
  background: rgb(46, 94, 133);
  .uline {
    text-decoration: underline;
    padding: 0 6px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  }
  .el-icon-time {
    font-size: 24px;
  }
}
</style>