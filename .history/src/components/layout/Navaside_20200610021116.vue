<template>
  <div>
    <div v-for="(item,index) in navtitle" :key="index">
      <div class="f-a navtitle p-l-3" @click="clickItem(item,index)" :class="{color:num===index}">
        <div :class="item.icon" class="icon f20"></div>
        <div class="f14 p-l-1" :class="{title:num!==index}">{{item.name}}</div>
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
          one: "/"
        },
        {
          icon: "el-icon-menu",
          name: "已发布",
          one: "/published"
        },
        {
          icon: "el-icon-s-data",
          name: "统计",
          one: "/statistics"
        },
        {
          icon: "el-icon-check",
          name: "发表文章",
          one: "/article"
        },
        {
          icon: "el-icon-price-tag",
          name: "标签页",
          one: "/label"
        },
        {
          icon: "el-icon-download",
          name: "导出excel",
          one: "/excel"
        },
        {
          icon: "el-icon-upload2",
          name: "图片上传",
          one: "/upload"
        },
        {
          icon: "el-icon-delete",
          name: "退出系统",
          one: "/dropOut"
        }
      ],
      num:'0',
    };
  },
  methods: {
    clickItem(item,index){
      this.$router.push(navtitle.item.one),
      this.num=index
    }
  },
  mounted() {
    this.clickItem()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.navtitle {
  height: 60px;
  color: rgb(144, 147, 153);
  &:hover {
    cursor: pointer;
    background: rgb(46, 94, 133);
  }
  .title{
    color: white;
  }
}
.color{
  color: rgb(255,208,75);
}
</style>