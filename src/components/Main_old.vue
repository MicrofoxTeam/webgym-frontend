<template>
  <div class="menu">
    <cabinet></cabinet>
    <div class="menu-circle">
      <transition-group name="fade" appear>
        <div class="menu-button" v-for="item in items" v-bind:key=item>
          <p>{{ item.name }}</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  components: {
    'sale-script': () => import('./main/sale-script.vue')
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
  @import '../onCircle.scss';
  .menu {
    width: 100%;
    height: 100%;
    padding-top: 170px;
  }

  .menu-circle {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border-radius: 150px;
    border: 1.5px solid $accent-color;
    position: relative;
    @include waterfall(10, .1, fade);
    @include onCircle(0, 7, 300, 60, 360, 0, 0);

    > span {
      .menu-button {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: $accent-color;
        display: flex;
        position: absolute;
        box-shadow: 0 0 10px rgba(1, 1, 1, 0.4);
        p {
          margin: auto;
          color:  $text-color;
          font-size: 28px;
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }
</style>
