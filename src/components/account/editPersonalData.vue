<template>
    <transition name="openBottom">
        <div class="editPersonalData">
        </div>
    </transition>
</template>

<script>
export default {
  name: 'editPersonalData',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';
    .editPersonalData {
        width: 100vw;
        height: 70vh;
        position: absolute;
        z-index: 100;
        background-color: $background_module-color;
        bottom: 0;
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
