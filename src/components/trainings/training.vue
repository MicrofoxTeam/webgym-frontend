<template>
    <div class="training"
         v-on:click="isOpen = !isOpen"
         v-bind:class="{newTraining_open: isOpen}"
    >
        <p class="noselect">Создать программу..</p>
    </div>
</template>

<script>
export default {
  name: 'training',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';
    $cardWidth: calc(100vw - 11vw);
    $cardHeight: calc(#{$cardWidth} * 0.19);
    .newTraining {
        width: $cardWidth;
        height: $cardHeight;
        margin: 0 auto;
        position: relative;
        background-color: $background_module-color;
        border-radius: 15px;
        p {
            padding: calc((#{$cardHeight} - 23px) / 2) ;
            color: $secondary-color;
            font-size: 20px;
        }
    }
    .newTraining_open {
        position: absolute;
        width: 100vw;
        height: 100vh;
        padding-bottom: calc(100vw / 6.25);
        z-index: 100;
        top: - 5.5vw;
    }
</style>
