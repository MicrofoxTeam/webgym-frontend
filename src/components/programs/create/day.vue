<template>
    <div class="day">
      <exercise
              v-for="(value, key) in trainingDays[this.currentDay].Exercises"
              :key="key"
              :number="key"
              :exercise="value"
      ></exercise>
      <!---->
      <div class="card new shadow-block"
           v-if="!isOpened.sourceSelect"
           @click="openSourceSelect"
      >
        <p>Добавить упражнение..</p>
      </div>
      <div class="select-tab"
        v-if="isOpened.sourceSelect"
      >
        <div class="select-tab__button select-tab__left"
             @click="openSelf"
             :class="{ 'select-tab__active': isOpened.self}"
        >
          <p>Создать</p>
        </div>
        <div class="select-tab__button select-tab__right"
             @click="openDownload"
             :class="{ 'select-tab__active': isOpened.download}"
        >
          <p>Загрузить</p>
        </div>
      </div>
      <div class="type-select"
           v-if="isOpened.self"
      >
        <div class="elem"
             @click="addDay('1')"
        >
          <p>Сил</p>
        </div>
        <div class="elem"
             @click="addDay('2')"
        >
          <p>♥</p>
        </div>
        <div class="elem"
             @click="addDay('3')"
        >
          <p>Work</p>
        </div>
      </div>
      <div class="option"
           v-if="isOpened.sourceSelect"
      >
        <div class="option__whence">
          <div class="option__tab option__tab_top-left"
               @click="openSelf"
               :class="{ 'option__tab__active': isOpened.self}"
          >
            <p>Создать</p>
          </div>
          <div class="option__tab option__tab_top-right"
               @click="openDownload"
               :class="{ 'option__tab__active': isOpened.download}"
          >
            <p>Загрузить</p>
          </div>
        </div>
        <div class="option__type"
             v-if="isOpened.self"
        >
          <div class="option__tab option__tab_bottom-left"
               @click="addDay('1')"
          >
            <p>Силовое</p>
          </div>
          <div class="option__tab option__tab_bottom-middle"
               @click="addDay('2')"
          >
            <p>Кардио</p>
          </div>
          <div class="option__tab option__tab_bottom-right"
               @click="addDay('3')"
          >
            <p>WorkOut</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'day',
  props: ['localId', 'trainingDays'],
  components: {
    'exercise': () => import('./exercise.vue')
  },
  data () {
    return {
      isOpened: {
        sourceSelect: false,
        self: false,
        download: false,
        typeSelect: false
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.closeAll()
    }
  },
  computed: {
    currentDay: function () {
      return this.$route.params.day
    }
  },
  methods: {
    addDay: function (type) {
      this.trainingDays[this.currentDay].Exercises.push({
        Name: '',
        Type: type,
        Sets: []
      })
      this.closeAll()
    },
    openSourceSelect: function () {
      this.isOpened.sourceSelect = true
      this.isOpened.self = true
    },
    openSelf: function () {
      this.isOpened.self = true
      this.isOpened.download = false
    },
    openDownload: function () {
      this.isOpened.self = false
      this.isOpened.download = true
    },
    closeAll: function () {
      for (let key in this.isOpened) {
        this.isOpened[key] = false
      }
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../main.scss';
  .day {
    width: 100vw;
    height: 100vh;
    padding-top: 2vw;
    padding-bottom: calc(100vw / 6.25);
    z-index: 1;
    h1 {
      text-align: center;
    }

    $cardWidth: 300px;
    $cardHeight: calc(#{$cardWidth} * 0.17);
    .card {
      width: $cardWidth;
      height: $cardHeight;
      margin: 15px auto 0 auto;
      position: relative;
      background-color: $background_module__light-color;
      border-radius: 15px;
      p {
        padding: calc((#{$cardHeight} - 23px) / 2) ;
        color: $text-color;
        font-size: 20px;
      }
    }
    .new p {
      color: $secondary-color;
    }

    .type-select {
      width: 300px;
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      .elem {
        background-color: $accent-color;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        display: flex;

        p {
          margin: auto;
          color: $text-color;
        }
      }
    }

    .option {
      width: 300px;
      margin: 20px auto;

      .option__tab {
        display: flex;
        border: 1px solid $secondary-color;
        p {
          margin: auto;
        }
      }

      .option__tab__active {
        border: 1px solid $accent-color;
        p {
          color: $accent-color;
        }
      }

      .option__whence {
        display: flex;
        justify-content: space-around;

        .option__tab {
          width: 50%;
          height: 40px;
        }

        .option__tab_top-left {
          border-right: 1px solid $secondary-color;
          border-radius: 15px 0 0 0;
        }

        .option__tab_top-right {
          border-left: 1px solid $secondary-color;
          border-radius: 0 15px 0 0;
        }
      }

      .option__type {
        display: flex;
        justify-content: space-around;

        .option__tab {
          width: calc(100% / 3);
          height: 40px;
        }

        .option__tab_bottom-left {
          border-right: 0 solid transparent;
          border-radius: 0 0 0 15px;
        }

        .option__tab_bottom-right {
          border-left: 0 solid transparent;
          border-radius: 0 0 15px 0;
        }
      }
    }
  }
</style>
