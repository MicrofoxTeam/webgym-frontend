<template>
  <div class="menu">
    <div class="menu-circle"></div>

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
  @import '../main.scss';
  .Main {
    width: 100%;
    height: 100%;
  }

  .menu-circle {
    width: 300px;
    height: 300px;
    margin: 100px auto 0 auto;
    border-radius: 150px;
    border: 2px solid $accent-color;
  }
</style>
