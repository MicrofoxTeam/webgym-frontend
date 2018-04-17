<template>
  <div class="menu shadow-block">
    <div class="menu_button">
      <div class="menu_image">
        <img src="../assets/calendar.png">
      </div>
      <p class="noselect">АКЦИИ</p>
    </div>
    <div class="menu_button">
      <div class="menu_image">
        <img src="../assets/group.png">
      </div>
      <p class="noselect">КЛУБЫ</p>
    </div>
    <div class="menu_button active">
      <div class="menu_image">
        <img src="../assets/training.png">
      </div>
      <p class="noselect">ТРЕНИРОВКИ</p>
    </div>
    <div class="menu_button">
      <div class="menu_image">
        <img src="../assets/calendar.png">
      </div>
      <p class="noselect">СОБЫТИЯ</p>
    </div>
    <div class="menu_button">
      <div class="menu_image">
        <img src="../assets/person.png">
      </div>
      <p class="noselect">АККАУНТ</p>
    </div>
    <div class="active-line"></div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../main.scss';
  .menu {
    position: absolute;
    width: 100vw;
    height: calc(100vw / 6.25);
    background-color: $sidebar-color;
    bottom: 0;
    z-index: 2;
    display: flex;

    .menu_button {
      width: 20vw;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      z-index: 3;
      .menu_image {
        height: calc(100% / 2.22);
        max-width: 85%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      p {
        font-size: 11px;
        color: $secondary-color;
        transition: .3s $cubic_bezier;
      }

      @for $i from 1 through 5 {
        &:nth-child(#{$i}).active {
          p {
            color: $text-color;
          }

          ~ .active-line{
            transform: translateX(#{($i * 20 - 20)}vw);
          }
        }
      }
    }

    .active-line {
      transition: .3s $cubic_bezier;
      width: 20vw;
      height: 2px;
      background-color: $accent-color;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 4;
    }
  }
</style>
