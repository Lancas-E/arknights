<template>
  <div>123</div>
</template>

<script>
export default {
  name: "Home",
  components: { },
  data: () => ({}),
  mounted () {
  },
};
</script>

<style scoped>
.home-card {
  height: 100%;
}

/*.animation-blink {*/
/*  animation-play-state: running;*/
/*}*/

/*.animation-blink:hover{*/
/*  animation-play-state: paused !important;*/
/*}*/

.theme--light .animation-blink {
  background: repeating-linear-gradient(
      -45deg,
      rgba(240, 240, 240, 0.98),
      rgba(240, 240, 240, 0.98) 45px,
      rgba(255, 255, 255, 0.9) 45px,
      rgba(255, 255, 255, 0.9) 90px
  ) !important;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
/*  animation: light-blink 3s infinite alternate ease-in-out;*/
}

.theme--dark .animation-blink {
  background: repeating-linear-gradient(
      -45deg,
      rgba(61, 61, 61, 0.98),
      rgba(61, 61, 61, 0.98) 45px,
      rgba(46, 46, 46, 0.9) 45px,
      rgba(46, 46, 46, 0.9) 90px
  ) !important;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  /*animation: dark-blink 3s infinite alternate ease-in-out;*/
}

/*@keyframes light-blink {*/
/*  from {*/
/*    text-shadow: 0 0 0 rgba(0, 0, 0, .2);*/
/*    box-shadow: 0 0 0 1px rgba(0, 0, 0, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);*/
/*  }*/
/*  to {*/
/*    text-shadow: 0 0 5px rgba(0, 0, 0, .2);*/
/*    box-shadow: 0 0 0 3px rgba(0, 0, 0, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);*/
/*  }*/
/*}*/

/*@keyframes dark-blink {*/
/*  from {*/
/*    text-shadow: 0 0 0 rgba(255, 255, 255, .3);*/
/*    box-shadow: 0 0 0 1px rgba(255, 255, 255, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);*/
/*  }*/
/*  to {*/
/*    text-shadow: 0 0 5px rgba(255, 255, 255, .3);*/
/*    box-shadow: 0 0 0 3px rgba(255, 255, 255, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);*/
/*  }*/
/*}*/
</style>