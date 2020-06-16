<template>
  <div class="background-img">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.8"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="6"
      linesColor="#dedede"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="200"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
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
.background-img{
  background: url('../assets/sky.871d198.jpg');
  position: fixed;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>