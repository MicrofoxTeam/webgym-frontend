<template>
  <div class="Create">
    <div class="substrate">
      <div class="day-selector--wrapper">
        <div class="header">
          <div class="back"
               @click="back"
          >
            <img src="../../assets/arrow-left.png">
          </div>
          <input v-model="program.name" class="program-name" placeholder="Название программы.."/>
          <div class="save"
               @click="saveProgram"
          >
            <img src="../../assets/save.png">
          </div>
        </div>
        <div class="wrapper">
          <router-link :to="'/programs/create/'+day.number" class="day-selector"
                       v-for="day in generator"
                       :key="day.number"
                       :class="{ 'filled':  program.trainingDays[day.number].Exercises.length !== 0}"
          >
            <p>{{ day.day }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="substrate">
      <router-view
              :localId="localId"
              :trainingDays="program.trainingDays"
      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
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
    back () {
      this.$router.push('/programs')
    },
    saveProgram: function () {
      this.$store.commit('programs/CREATE_PROGRAM', {
        localId: this.localId,
        program: this.program
      })
      this.$router.push('/programs')
    }
  },
  computed: {
    generator: function () {
      let mass = []
      let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'Сб', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'Сб', 'ВС']
      for (let i = 1; i < 15; i++) {
        mass.push({
          number: i,
          day: days[i - 1]
        })
      }
      return mass
    }
  },
  created: function () {
    this.localId = String(new Date().getTime()).slice(-8)
    for (let i = 1; i < 15; i++) {
      this.$set(this.program.trainingDays, i, {Exercises: []})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../main.scss';
  .Create {
    width: 100vw;
    height: 100vh;
    color: $text-color;
    background: $background-color;
    z-index: 100;
    position: relative;
  }

  .day-selector--wrapper {
    width: 300px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;

      .program-name {
        margin-bottom: 0;
        width: calc(100% - 90px);
        text-align: center;
        font-size: 16px;
      }

      .back {
        width: 35px;
        height: 35px;
        display: flex;
        img {
          margin: auto;
          width: 80%;
        }
      }

      .save {
        width: 40px;
        height: 40px;
        display: flex;
        border-radius: 20px;
        background-color: $accent-color;
        img {
          margin: auto;
          width: 60%;
        }
      }
    }

    .wrapper {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 2.4px;

      .day-selector {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 2px solid $secondary-color;
        display: flex;
        color: $secondary-color;
        margin-top: 5px;
        transition: .2s;

        p {
          margin: auto;
        }

        &.router-link-active {
          border: 2px solid $accent-color;
          color: $text-color;
          border-radius: 12px;
        }

        &.filled {
          border: 2px solid $accent-color;
          color: $accent-color;
          border-radius: 12px;

          &.router-link-active {
            background-color: transparent;
            color: $text-color;
          }
        }
      }
    }
  }

  .save-button {
    transition: all .2s;
    width: 100%;
    max-width: 300px;
    height: 48px;
    margin: 0 auto;
    border: 1px solid $accent-color;
    display: flex;
    border-radius: 12px;
    color: $accent-color;

    p {
      margin: auto;
    }
  }

  .separation {
    width: 100vw;
  }
</style>
