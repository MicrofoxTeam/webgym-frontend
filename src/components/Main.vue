<template>
  <div class="Main">

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
</style>
