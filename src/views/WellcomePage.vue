<template>
  <div id="wellcome-page">
    <div class="title">明日方舟</div>
    <img src="../assets/rhodes_island.png" class="wellcome-bg" :style="wellcomeBgStyle" />
    <div class="progress-content">
      <div class="start-btn" :style="startBtnStyle" @click="clickStartBtn"></div>
      <div class="progress-bar" :style="progressStyle"></div>
      <div class="progress-percent" :style="progressPercentStyle">{{Math.floor(progress)}}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    progress: 0,
    wellcomeBgStyle: {
      objectFit: "cover",
      height: "70vh",
      width: "100vw",
      filter: "blur(8px)",
      transition: "0.8s"
    },
    startBtnStyle: {
      opacity: "0",
      display: "none"
    }
  }),
  computed: {
    progressStyle() {
      const style = {
        width: this.progress + "%"
      };
      if (this.progress === 100) {
        style.opacity = "0";
      }
      return style;
    },
    progressPercentStyle() {
      const style = {};
      if (this.progress === 100) {
        style.opacity = "0";
      }
      return style;
    }
  },
  watch: {
    progress: function(newProgress) {
      if (newProgress === 100) {
        this.startBtnStyle.display = "flex";
        setTimeout(() => {
          this.startBtnStyle.opacity = "100%";
          this.wellcomeBgStyle.filter = "none";
        }, 300);
      }
    }
  },
  methods: {
    startProgress() {
      this.timer = setInterval(() => {
        const inc = Math.random() * 20;
        if (this.progress + inc > 100) {
          this.progress = 100;
          clearInterval(this.timer)
        } else {
          this.progress += inc;
        }
      }, 300);
    },
    endProgress() {
      clearInterval(this.timer)
    },
    clickStartBtn() {
      this.$router.push({ name: "commandCenter" });
      this.startBtnStyle.display = "none";
    }
  },
  mounted() {
    this.startProgress()
  },
  unmounted() {
    this.endProgress()
  }
};
</script>

<style scoped lang='less'>
#wellcome-page {
  display: flex;
  height: 100vh;
  align-items: center;
  .title {
    position: fixed;
    top: 6vh;
    width: 100vw;
    text-align: center;
    color: white;
    font-size: 42px;
    letter-spacing: 15px;
    font-style: italic;
  }
  .progress-content {
    position: fixed;
    width: 100vw;
    bottom: 10vh;
    z-index: 2;
    display: flex;
    flex-direction: column;
    .start-btn {
      align-self: center;
      position: absolute;
      justify-content: center;
      align-items: center;
      top: -10px;
      width: 30px;
      height: 30px;
      border: 4px yellow solid;
      transition: opacity 0.5s 0.8s;
      transform: rotate(45deg);
      z-index: 1;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        border: 4px yellow solid;
        animation: 0.7s linear 0s infinite radiancy;
      }
      @keyframes radiancy {
        0% {
          height: 40px;
          width: 40px;
        }
        50% {
          height: 70px;
          width: 70px;
        }
        80% {
          height: 80px;
          width: 80px;
          border-color: transparent;
        }
        100% {
          height: 80px;
          width: 80px;
          border-color: transparent;
        }
      }
    }
    .progress-bar {
      height: 6px;
      border-radius: 2px;
      background-color: yellow;
      transition: width 0.9s, opacity 0.9s 0.5s;
    }
    .progress-percent {
      margin-top: 5px;
      text-align: center;
      color: grey;
      font-size: 20px;
      font-weight: 600;
      font-family: fantasy;
      transition: opacity 0.9s 0.5s;
    }
  }
}
</style>