<template>
  <div class="nav f-aj-bw p-lr-3 f18">
    <div class="f-a">
      欢迎
      <div class="uline p-lr-1">{{user.username}}</div>来到小爱后台管理系统
    </div>
    <div class="f-a">
      <div>早上好, 亲爱的</div>
      <div class="uline">{{user.username}}</div>
      <!-- <div class="m-l-3 el-icon-time"></div> -->
      <div class="f14 m-l-2">上次登录时间: {{time}}</div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs"
export default {
  name: "Navheader",
  props: {},
  components: {},
  data() {
    return {
      user:{},
      time: "",
      // hour:''
    };
  },
  methods: {
    
  },
  mounted() {
    this.user =JSON.parse(sessionStorage.getItem('user'));
    // console.log(this.user);
    this.time = dayjs(this.user.date).format('YYYY年MM月DD日 hh时mm分ss秒')
    // console.log(this.time);
    let hour =d.getHours()
    console.log(hour);
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