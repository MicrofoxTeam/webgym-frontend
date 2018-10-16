<template>
    <div class="add-button__wrapper">
        <div class="add-button__menu" v-if="">
            <div class="add-button__item">
               <p>Силовое</p><span></span>
            </div>
            <div class="add-button__item">
                <p>Кардио</p><span></span>
            </div>
            <div class="add-button__item">
                <p>Workout</p><span></span>
            </div>
        </div>
        <div class="add-button">
            <p>+</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'addButton'
}
</script>

<style lang="scss" scoped>
.addButton {
}
</style>
