<template>
  <div>
    <div v-for="(item,index) in navtitle" :key="index">
      <div class="f-a navtitle p-l-3" @click="clickItem(item,index)" :class="{'color':num===index}">
        <div :class="item.icon" class="icon f20"></div>
        <div class="f14 p-l-1">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navaside",
  props: {},
  components: {},
  data() {
    return {
      navtitle: [
        {
          icon: "el-icon-location",
          name: "首页",
          path: "/"
        },
        {
          icon: "el-icon-menu",
          name: "已发布",
          path: "/published"
        },
        {
          icon: "el-icon-s-data",
          name: "统计",
          path: "/statistics"
        },
        {
          icon: "el-icon-check",
          name: "发表文章",
          path: "/article"
        },
        {
          icon: "el-icon-price-tag",
          name: "标签页",
          path: "/label"
        },
        {
          icon: "el-icon-download",
          name: "导出excel",
          path: "/excel"
        },
        {
          icon: "el-icon-delete",
          name: "退出系统",
          path: "/dropOut"
        }
      ],
      num:''
    };
  },
  methods: {
    clickItem(item,index){
      this.num=index,
      this.$rut
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.navtitle {
  height: 60px;
  color: white;
  &:hover {
    cursor: pointer;
    background: rgb(46, 94, 133);
  }
  .icon {
    color: rgb(144, 147, 153);
  }
}
.color{
  color: rgb(255,208,75);
}
</style>