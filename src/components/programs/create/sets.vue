<template>
    <transition name="openBottom">
        <div class="sets shadow-block">
            <h3 class="closeButton noselect" @click="close">ЗАКРЫТЬ</h3>
            <p>{{ exercise.Type }}</p>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'sets',
  props: ['exercise'],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    close: function () {
      this.$emit('closeMe')
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../main.scss';
  .sets {
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 100;
      background-color: $background_module-color;
      top: 0;
      left: 0;
      overflow-y: scroll;
  }

  .openBottom-enter-active, .openBottom-leave-active {
      transition: transform .5s;
  }
  .openBottom-enter {
      transform: translateY(100vh);
  }
  .openBottom-leave-to {
      transform: translateY(100vh);
  }
</style>
