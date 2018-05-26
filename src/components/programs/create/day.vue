<template>
  <transition name="fade">
    <div class="day">
      <div class="card shadow-block"
           v-for="(value, key) in trainingDays[this.currentDay].Exercises"
           :key="key"
      >
        <p>{{ value.Name }}</p>
      </div>
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
             @click="addDay('Кардио')"
        >
          <p>Кард</p>
        </div>
        <div class="elem"
             @click="addDay('Силовое')"
        >
          <p>Сил</p>
        </div>
        <div class="elem"
             @click="addDay('Workout')"
        >
          <p>Work</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'day',
  props: ['localId', 'trainingDays'],
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
        Name: type,
        Sets: []
      })
      this.closeAll()
    },
    openSourceSelect: function () {
      this.isOpened.sourceSelect = true
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
    padding-top: 5.5vw;
    padding-bottom: calc(100vw / 6.25);
    position: relative;
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
      justify-content: space-between;
      .elem {
        background-color: $accent-color;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        display: flex;

        p {
          margin: auto;
          color: $text-color;
        }
      }
    }
  }
</style>
