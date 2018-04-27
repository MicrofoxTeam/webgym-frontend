<template>
  <div class="Create">
    <div class="day-selector--wrapper">
      <div>
        <div class="day-selector filled">
          <p>ПН</p>
        </div>
        <div class="day-selector filled">
          <p>ВТ</p>
        </div>
        <div class="day-selector">
          <p>СР</p>
        </div>
        <div class="day-selector">
          <p>ЧТ</p>
        </div>
        <div class="day-selector active">
          <p>ПТ</p>
        </div>
        <div class="day-selector">
          <p>СБ</p>
        </div>
        <div class="day-selector">
          <p>ВС</p>
        </div>
      </div>

      <div>
        <div class="day-selector ">
          <p>ПН</p>
        </div>
        <div class="day-selector">
          <p>ВТ</p>
        </div>
        <div class="day-selector filled">
          <p>СР</p>
        </div>
        <div class="day-selector">
          <p>ЧТ</p>
        </div>
        <div class="day-selector">
          <p>ПТ</p>
        </div>
        <div class="day-selector">
          <p>СБ</p>
        </div>
        <div class="day-selector filled">
          <p>ВС</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../main.scss';
  .Create {
    width: 100vw;
    height: 100vh;
    color: $text-color;
    background-color: $background_module-color;
    z-index: 100;
    position: relative;
  }

  .day-selector--wrapper {
    width: 300px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;

    > div {
      display: flex;
      justify-content: space-around;
      margin-top: 2.4px;

      .day-selector {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: 2px solid $secondary-color;
        display: flex;

        p {
          margin: auto;
        }

        &.active {
          border: 2px solid $accent-color;
        }

        &.filled {
          border: 2px solid $accent-color;
          background-color: $accent-color;
        }
      }
    }
  }

  .separation {
    width: 100vw;
  }
</style>
