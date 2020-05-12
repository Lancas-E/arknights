<template>
  <div
    id="__not_found_page"
    class="fill-height"
    style="cursor: pointer; padding: 0;"
    @click="$router.push({name: 'commandCenter'})"
  >
    NOT FOund
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data: () => ({}),
  computed: {
 
  }
};
</script>

<style scoped>
</style>