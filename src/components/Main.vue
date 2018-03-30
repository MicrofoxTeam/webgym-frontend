<template>
  <div class="Main">
    <div class="sidebar">
      <user-slider></user-slider>
      <tags-area></tags-area>
      <status></status>
    </div>
    <sale-script></sale-script>
  </div>
</template>

<script>
export default {
  name: 'main',
  components: {
    'sale-script': () => import('./main/sale-script.vue'),
    'user-slider': () => import('./main/user-slider.vue'),
    'tags-area': () => import('./main/tags-area.vue'),
    'status': () => import('./main/status.vue')
  }
}
</script>

<style lang="scss" scoped>
  .Main {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,#ea5c54,#bb6dec);
  }

  .sidebar {
    width: 33vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    float: left;
  }
</style>
