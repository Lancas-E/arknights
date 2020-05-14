<template>
  <div class="command-page">
    <div class="setting-area">
<v-icon dark>fas fa-lock</v-icon>

      <v-icon x-large dark>home</v-icon>
    </div>
    <div class="left-panel">
      <div class="user-info"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({}),
  mounted() {}
};
</script>

<style scoped lang="less">
.command-page {
  display: flow-root;
  height: 100%;
  background: url("../assets/bridge-0.webp");
  background-repeat: no-repeat;
  background-size: cover;
  perspective: 250px;
  overflow: hidden;
  .left-panel {
    width: 35vw;
    height: 90vh;
    transform: rotateY(10deg) translateX(60px) translateZ(-20px);
    transition: 0.5s;
  }
  .setting-area {
    margin-top: 30px;
    width: 300px;
    height: 100px;
    background: black;
    opacity: 70%;
  }
  .user-info {
    margin-top: 30px;
    width: 300px;
    height: 100px;
    background: black;
    opacity: 70%;
  }
}
</style>