<template>
  <transition name="fade">
    <div class="account">
      <div class="account_wrapper">
        <div class="avatar">
        </div>
        <div class="user_wrapper">
          <div class="name_wrapper">
            <h1>{{ user.NickName }}</h1>
            <h2>{{ user.Email }}</h2>
            <h2>{{ user.FullName }}</h2>
          </div>
          <div class="control_wrapper">
            <h3 class="noselect" @click="isEditPersonalData = true">РЕДАКТИРОВАТЬ</h3>
            <h3 class="noselect" @click="logout()">ВЫЙТИ</h3>
          </div>
        </div>
      </div>
      <transition name="openBottom">
        <div class="editPersonalData" v-if="isEditPersonalData">
          <h3 class="closeButton noselect" v-on:click="isEditPersonalData = false">ЗАКРЫТЬ</h3>
          <div class="input_wrapper">
            <input type="text" name="name" placeholder="Ник" v-model="user.NickName">
            <input type="text" name="name" placeholder="Имя" v-model="user.FullName">
            <input type="text" name="name" placeholder="Город" v-model="user.City">
            <textarea rows="3" name="name" placeholder="О себе" v-model="user.UserAbout"></textarea>
            <p class="titleMessage">Входящие сообщения от пользователей:</p>
            <div class="privacy-select">
              <div class="privacy-select--button privacy-select--button__left" v-bind:class="{'privacy-select--button__active': user.MessageBan===true}" v-on:click="user.MessageBan = true">
                <p>Разрешено</p>
              </div>
              <div class="privacy-select--button privacy-select--button__right" v-bind:class="{'privacy-select--button__active': user.MessageBan===false}" v-on:click="user.MessageBan = false">
                <p>Запрещено</p>
              </div>
            </div>
            <div class="save-button noselect" @click="sendChanges()">
              <p>Сохранить</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Account',
  components: {
    'editPersonalData': () => import('./account/editPersonalData.vue')
  },
  data () {
    return {
      isEditPersonalData: false,
      privacy: true
    }
  },
  methods: {
    pushBack: function () {
      history.back()
    },
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {
          if (!this.$store.getters['auth/checkLogin']) {
            this.$router.push('/')
          }
        })
    },
    sendChanges () {
      this.isEditPersonalData = false
      this.$store.dispatch('account/changeNick', {
        'NewData': this.user.NickName
      })
      this.$store.dispatch('account/changeName', {
        'NewData': this.user.FullName
      })
      this.$store.dispatch('account/changeCity', {
        'NewData': this.user.City
      })
      this.$store.dispatch('account/changeUserAbout', {
        'NewData': this.user.UserAbout
      })
      this.$store.dispatch('account/changeMessageBan', {
        'NewData': this.user.MessageBan
      })
    }
  },
  computed: {
    user: function () {
      return this.$store.getters['account/getUser']
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('account/getUser')
  }
}
</script>

<style lang="scss" scoped>
  @import '../main.scss';
  .account {
    width: 100vw;
    height: 100vh;
    padding-top: 5.5vw;
    padding-bottom: calc(100vw / 6.25);
    z-index: 1;
  }

  .account_wrapper {
    position: relative;
    width: 310px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: #2f9aac;
    }

    .user_wrapper {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .name_wrapper {
        display: flex;
        flex-direction: column;
        color: $text-color;
        font-size: 10px;
      }

      .control_wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: $secondary-color;
        font-size: 10px;
      }
    }
  }

  .editPersonalData {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    background-color: $background_module-color;
    bottom: 0;
    overflow-y: scroll;

    .closeButton {
      position: absolute;
      top: 20px;
      right: 20px;
      color: $secondary-color;
      font-size: 12px;
    }

    .input_wrapper {
      padding-top: 55px;
      width: 300px;
      margin: 0 auto;
    }

    p.titleMessage {
      color: $secondary-color;
      font-size: 15px;
      text-align: center;
    }

    .privacy-select {
      margin-top: 20px;
      height: 40px;
      width: 100%;
      background-color: transparent;
      border-radius: 20px;
      display: flex;
      cursor: pointer;
      user-select: none;

      &:active, &:focus, &:hover {
        outline: none;
        outline: 0;
        outline-offset: 0;
      }

      &::-moz-focus-inner {
        border: 0;
      }

      .privacy-select--button {
        width: 50%;
        display: flex;
        border: 1px solid $secondary-color;

        p {
          margin: auto;
          color: $secondary-color
        }
      }

      .privacy-select--button__left {
        border-radius: 20px 0 0 20px;
        border-right: none;
      }

      .privacy-select--button__right {
        border-radius: 0 20px 20px 0;
        border-left: none;
      }

      .privacy-select--button__active {
        border: 1px solid $accent-color;
        p {
          color: $accent-color !important;
        }
      }
    }

    .save-button {
      transition: all .2s;
      width: 100%;
      height: 48px;
      margin: 40px auto;
      border: 1px solid $accent-color;
      display: flex;
      border-radius: 12px;
      color: $accent-color;

      p {
        margin: auto;
      }
    }
  }

  .openBottom-enter-active, .openBottom-leave-active {
    transition: transform .5s $cubic_bezier;
  }
  .openBottom-enter {
    transform: translateY(100vh);
  }
  .openBottom-leave-to {
    transform: translateY(100vh);
  }
</style>
