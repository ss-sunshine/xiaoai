<template>
  <div>
    <div class="background-img">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.6"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
    <login></login>
    <!-- <registered></registered> -->
  </div>
</template>

<script>
import Login from "../../components/login/Login";
// import Registered from "../../components/login/Registered";
export default {
  name: "Alogin",
  props: {},
  components: {
    Login,
    // Registered
  },
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
.background-img {
  background: linear-gradient(to bottom, #2c3e51, #3498db);
  // background: url('../assets/sky.871d198.jpg');
  position: fixed;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>