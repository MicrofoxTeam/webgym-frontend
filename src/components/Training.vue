<template>
  <div class="training">
    123
  </div>
</template>

<script>
export default {
  name: 'Training',
  data () {
    return {
      items: [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../main.scss';
  .training {
    width: 100vw;
    height: 100vh;
    padding-top: 170px;
    position: relative;
    z-index: 1;
  }
</style>
