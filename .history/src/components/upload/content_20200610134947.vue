<template>
  <div>
    <div class="navaside"></div>
    <div class="content">
        <div>
            <div>
                <div>支持拖拽</div>
                <div class="detail">Element UI自带上传组件</div>
            </div>
            <div></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.navaside {
  width: 200px;
}
.content{
    padding: 20px 20px 0 20px;
    .detail{
        height: 60px;
        background: rgb(238,238,238);
    }
}
</style>