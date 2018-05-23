<template>
  <div class="Create">
    <div class="day-selector--wrapper">
      <input v-model="program.name" placeholder="Название программы.."/>
      <div>
        <router-link to="/programs/create/1" class="day-selector">
          <p>ПН</p>
        </router-link>
        <router-link to="/programs/create/2" class="day-selector">
          <p>ВТ</p>
        </router-link>
        <router-link to="/programs/create/3" class="day-selector">
          <p>СР</p>
        </router-link>
        <router-link to="/programs/create/4" class="day-selector">
          <p>ЧТ</p>
        </router-link>
        <router-link to="/programs/create/5" class="day-selector ">
          <p>ПТ</p>
        </router-link>
        <router-link to="/programs/create/6" class="day-selector">
          <p>СБ</p>
        </router-link>
        <router-link to="/programs/create/7" class="day-selector">
          <p>ВС</p>
        </router-link>
      </div>

      <div>
        <div class="day-selector ">
          <p>ПН</p>
        </div>
        <div class="day-selector">
          <p>ВТ</p>
        </div>
        <div class="day-selector">
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
        <div class="day-selector">
          <p>ВС</p>
        </div>
      </div>
      <div class="next-button" @click="saveProgram">
        <p>Сохранить</p>
      </div>
    </div>
    <router-view
            :localId="localId"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: 'newProgram',
  data () {
    return {
      data: '',
      localId: '',
      program: {
        name: '',
        type: '1',
        trainingDays: {}
      }
    }
  },
  methods: {
    saveProgram: function () {
      this.$store.commit('programs/CREATE_PROGRAM', {
        localId: this.localId,
        program: this.program
      })
      this.$router.push('programs')
    }
  },
  created: function () {
    this.localId = String(new Date().getTime()).slice(-8)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../main.scss';
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
        color: $secondary-color;

        p {
          margin: auto;
        }

        &.router-link-active {
          border: 2px solid $accent-color;
          color: $text-color;
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
