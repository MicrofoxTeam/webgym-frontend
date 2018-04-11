<template>
  <div class="menu">
    <cabinet></cabinet>
    <div class="menu-circle">
      <div class="menu-button">
        <p>0</p>
      </div>
      <div class="menu-button">
        <p>A</p>
      </div>
      <div class="menu-button">
        <p>A</p>
      </div>
      <div class="menu-button">
        <p>A</p>
      </div>
      <div class="menu-button">
        <p>A</p>
      </div>
      <div class="menu-button">
        <p>A</p>
      </div>
      <div class="menu-button">
        <p>A</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  components: {
    'sale-script': () => import('./main/sale-script.vue'),
    'user-slider': () => import('./main/user-slider.vue'),
    'tags-area': () => import('./main/tags-area.vue'),
    'cabinet': () => import('./main/status.vue')
  }
}
</script>

<style lang="scss" scoped>
  @import '../main.scss';
  @import '../onCircle.scss';
  .menu {
    width: 100%;
    height: 100%;
  }

  .menu-circle {
    width: 300px;
    height: 300px;
    margin: 100px auto 0 auto;
    border-radius: 150px;
    border: 2px solid $accent-color;
    position: relative;

    .menu-button {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      border: 1.5px solid $text-color;
      background-color: $text-color;
      display: flex;
      position: absolute;
      p {
        margin: auto;
        color:  $accent-color;
      }

      @include onCircle(90, 7, 300, 60);
    }
  }
</style>
