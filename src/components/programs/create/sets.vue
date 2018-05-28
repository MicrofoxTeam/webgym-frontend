<template>
    <transition name="openBottom">
        <div class="sets shadow-block">
            <h3 class="closeButton noselect" @click="close">ЗАКРЫТЬ</h3>
            <div class="sets__wrapper">
                <input v-model="exercise.Name" placeholder="Название упражнения..">
                <div class="editor__wrapper">
                    <div class="editor__area">
                        <div class="editor__button" @click="increment"><p>+</p></div>
                        <p class="editor__count">{{ data }}</p>
                        <div class="editor__button" @click="decrement"><p>-</p></div>
                    </div>
                    <div class="next-button" @click="close"><p>Сохранить</p></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'sets',
  props: ['exercise'],
  data () {
    return {
      generator: [
        ['Repetition', 'Weight', 'RestTime'],
        ['Repetition', 'Weight', 'RestTime'],
        ['Repetition', 'Weight', 'RestTime']
      ],
      data: 0
    }
  },
  computed: {
  },
  methods: {
    close: function () {
      this.$emit('closeMe')
    },
    increment: function () {
      this.data = this.data + 1
    },
    decrement: function () {
      this.data = this.data - 1
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../main.scss';
  .next-button {
      width: 300px;
      margin-bottom: 40px;
  }
  .sets {
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 100;
      background-color: $background_module-color;
      top: 0;
      left: 0;
      overflow-y: scroll;

      .sets__wrapper {
          padding-top: 55px;
          width: 300px;
          margin: 0 auto;

          input {
              text-align: center;
          }

          .editor__wrapper {
              width: 300px;
              height: 100px;
              display: flex;

              .editor__area {
                  width: 30px;
                  height: 100px;
                  margin: auto;
                  background-color: $background_module__light-color;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;

                  p {
                      text-align: center;
                  }

                  .editor__button {
                      width: 30px;
                      height: 30px;
                      border-radius: 15px;
                      display: flex;
                      P {
                          margin: auto;
                          color: $accent-color;
                          font-size: 24px;
                      }
                  }
              }
          }
      }
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
