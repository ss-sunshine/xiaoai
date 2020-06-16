<template>
  <div class="nav f-aj-bw p-lr-3 f16">
    <div class="f-a">
      欢迎
      <div class="uline p-lr-1"> {{ruleForm.username}} </div>
      来到小爱后台管理系统
    </div>
    <div class="f-a">
      <div>早上好, 亲爱的</div>
      <div class="uline p-lr-1"> {{ruleForm.username}} </div>
      <div>时间</div>
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
      ruleForm:''
    };
  },
  methods: {},
  mounted() {
    this.ruleForm = JSON.parse(sessionStorage.getItem('ruleForm'))
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav{
  color: white;
  height: 60px;
  background: rgb(46, 94, 133);
  .uline{
    text-decoration: underline;
  }
}
</style>