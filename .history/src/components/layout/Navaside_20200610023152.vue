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
          page: "/"
        },
        {
          icon: "el-icon-menu",
          name: "已发布",
          page: "/published"
        },
        {
          icon: "el-icon-s-data",
          name: "统计",
          page: "/statistics"
        },
        {
          icon: "el-icon-check",
          name: "发表文章",
          page: "/article"
        },
        {
          icon: "el-icon-price-tag",
          name: "标签页",
          page: "/label"
        },
        {
          icon: "el-icon-download",
          name: "导出excel",
          page: "/excel"
        },
        {
          icon: "el-icon-upload2",
          name: "图片上传",
          page: "/upload"
        },
        {
          icon: "el-icon-delete",
          name: "退出系统",
          page: "/dropOut"
        }
      ],
      num:0,
    };
  },
  methods: {
    clickItem(item,index){
      this.$router.push(index,item.page),
      this.num=index
    }
  },
  created(){
    
  },
  mounted() {
    // this.clickItem()
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