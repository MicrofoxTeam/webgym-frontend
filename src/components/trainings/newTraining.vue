<template>
    <div class="newTraining">
        <p>Создать программу..</p>
    </div>
</template>

<script>
export default {
  name: 'newTraining'
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';
    $cardWidth: calc(100vw - 11vw);
    $cardHeight: calc(#{$cardWidth} * 0.19);
    .newTraining {
        width: $cardWidth;
        height: $cardHeight;
        margin: 5.5vw auto;
        position: relative;
        background-color: $background_module-color;
        border-radius: 15px;
        p {
            padding: calc((#{$cardHeight} - 23px) / 2) ;
            color: $secondary-color;
            font-size: 20px;
        }
    }
</style>
