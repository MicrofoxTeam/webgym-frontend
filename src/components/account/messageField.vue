<template>
    <transition name="openBottom">
        <div class="message-field">
            <h3 class="closeButton noselect" @click="close">ЗАКРЫТЬ</h3>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'message-field',
  data () {
    return {
    }
  },
  methods: {
    close: function () {
      this.$emit('closeMe')
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';
    .message-field {
        width: 100vw;
        height: 40vh;
        position: absolute;
        z-index: 100;
        background-color: $background_module-color;
        bottom: 0;

        .closeButton {
            position: absolute;
            top: 20px;
            right: 20px;
            color: $secondary-color;
            font-size: 12px;
        }
    }

    .openBottom-enter-active, .openBottom-leave-active {
        transition: transform .5s;
    }
    .openBottom-enter {
        transform: translateY(70vh);
    }
    .openBottom-leave-to {
        transform: translateY(70vh);
    }
</style>
