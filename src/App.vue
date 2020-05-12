<template>
  <div id="app">
    <transition name="slide-left" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    transitionName: ""
  }),
  watch: {
    $route(to, from) {
      console.log("to,from :", to, from);
      if (to.meta.deep - from.meta.deep > 0) {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  background: black;
}
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
}

.slide-left-enter {
  transition-timing-function: ease-in;
  opacity: 0%;
}

.slide-left-leave {
  opacity: 100%;
}
</style>