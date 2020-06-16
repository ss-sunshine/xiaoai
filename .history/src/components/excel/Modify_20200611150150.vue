<template>
  <div class="box1 f-j">
    <div v-for="(item,index) in arr" :key="index" class="modify1">
      <div class="modify">
        <div class="f-a m-b-2">
          <div class="m-r-2">名称:</div>
          <el-input v-model="value">{{item.NAME}}</el-input>
        </div>
        <div class="f-a m-b-2">
          <div class="m-r-2">原价:</div>
          <el-input v-model="value">{{item.ORI_PRICE}}</el-input>
        </div>
        <div class="f-a m-b-2">
          <div class="m-r-2">现价:</div>
          <el-input v-model="value">{{item.PRESENT_PRICE}}</el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    arr: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
        value: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  .modify1{
      
  }
  .modify {
    margin-top: 150px;
    background: white;
    padding: 80px 20px 20px 20px;
    z-index: 200;
  }
}
</style>