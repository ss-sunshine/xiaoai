<template>
  <div class="nav f-aj-bw p-lr-3 f18">
    <div class="f-a">
      欢迎
      <div class="uline p-lr-1">{{user.username}}</div>来到小爱后台管理系统
    </div>
    <div class="f-a">
      <div @getTime="getTime">{{hello}}</div>
      <div class="uline">{{user.username}}</div>
      <div class="f-a">
        <div class="m-l-2 el-icon-time"></div>
        <div class="f14">上次登录时间 : {{time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "Navheader",
  props: {},
  components: {},
  data() {
    return {
      user: {},
      time: "",
      hello: ""
    };
  },
  methods: {
    getTime() {
      let d = new Date();
      // console.log(d);
      let hour = d.getHours();
      // console.log(hour);
      if (hour >= 6 && hour < 12) {
        return this.hello = "早上好, 亲爱的";
      } else if (hour >= 12 && hour < 14) {
        return this.hello = "中午好, 亲爱的";
      } else if (hour >= 14 && hour < 18) {
        return this.hello = "下午好, 亲爱的";
      } else if (hour >= 18 && hour < 24) {
        return this.hello = "晚上好, 亲爱的";
      } else if (hour >= 24 && this.hour < 6) {
        return this.hello = "该睡觉了, 亲爱的";
      }
    }
  },
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(this.user);
    this.time = dayjs(this.user.date).format("YYYY年MM月DD日 hh时mm分ss秒");
    // console.log(this.time);
    this.getTime();
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
    font-size: 18px;
    margin-right: 3px;
  }
}
</style>