<template>
  <transition name="fade">
    <div class="day">
      <h1>{{ currentDay }}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'day',
  props: ['localId'],
  data () {
    return {
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(this.Vue)
    }
  },
  computed: {
    currentDay: function () {
      return this.$route.params.day
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../main.scss';
  .day {
    width: 100vw;
    height: 100vh;
    padding-top: 5.5vw;
    padding-bottom: calc(100vw / 6.25);
    position: relative;
    z-index: 1;
    h1 {
      text-align: center;
    }
  }
</style>
