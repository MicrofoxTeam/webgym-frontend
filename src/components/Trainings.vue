<template>
  <transition name="fade">
    <div class="trainings">
      <newTraining></newTraining>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Trainings',
  components: {
    'newTraining': () => import('./trainings/new-training.vue')
  },
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
  .trainings {
    width: 100vw;
    height: 100vh;
    padding-top: 5.5vw;
    padding-bottom: calc(100vw / 6.25);
    position: relative;
    z-index: 1;
  }
</style>
