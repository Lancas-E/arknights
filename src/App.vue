<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
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
      if (to.meta.deep - from.meta.deep > 0) {
        this.transitionName = "fade";
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
  display: flow-root;
  height: 100vh;
  width: 100vw;
  background: black;
}
.fade-enter-active,
.fade-leave-active {
  will-change: transform;
  transition: all 300ms;
}

.fade-enter {
  transition-timing-function: ease-in;
  opacity: 0%;
}

.fade-leave {
  opacity: 100%;
}
</style>