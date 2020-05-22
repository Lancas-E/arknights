<template>
  <div class="command-page">
    <div class="setting-area">
      <v-icon dark>fas fa-lock</v-icon>
      <v-icon x-large dark>home</v-icon>
    </div>
    <div class="user-info">
      <svg class="level-circle" width="160" height="160">
        <path d="M80 5,A75 75 0 0 1 80 155" stroke="yellow" stroke-width="4" fill="transparent" />
        <path d="M80 155,A75 75 0 0 1 80 5" stroke="grey" stroke-width="2" fill="transparent" />
      </svg>
      <div class="level-number">87</div>
      <div class="level-text">LV</div>
      <div class="user-name">LANCAS</div>
      <div class="user-uid">ID: 123456789</div>
    </div>
    <div class="left-panel"></div>
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
  background: url("../assets/UI_HOME_FRONT_BKG.png");
  background-repeat: no-repeat;
  background-size: cover;
  perspective: 250px;
  overflow: hidden;

  .setting-area {
    margin-top: 30px;
    width: 300px;
    height: 100px;
    background: black;
    opacity: 70%;
  }
  .user-info {
    position: relative;
    margin: 40px 0 0 40px;
    color: blanchedalmond;

    .level-circle {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.7);
      border-radius: 80px;
      opacity: 0.9;
      box-shadow: inset 0 0 12px white, 0 0 12px black;
    }
    .level-number {
      position: relative;
      top: 30px;
      left: 35px;
      font-size: 80px;
    }
    .level-text {
      position: relative;
      top: 15px;
      left: 66px;
      font-size: 22px;
      letter-spacing: 3px;
    }
    .user-name {
      margin: 40px 0 0 15px;
      font-size: 30px;
      text-shadow: black 0 0 10px;
    }
    .user-uid {
      margin: 10px 0 0 15px;
      font-size: 20px;
      text-shadow: black 0 0 10px;
    }
  }
  .left-panel {
    width: 35vw;
    height: 90vh;
    transform: rotateY(10deg) translateX(60px) translateZ(-20px);
    transition: 0.5s;
  }
}
</style>