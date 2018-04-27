<template>
  <div class="account">
    <div class="account_wrapper">
      <div class="avatar">
      </div>
      <div class="user_wrapper">
        <div class="name_wrapper">
          <h1>Serega_SRG</h1>
          <h2>monohrom98@gmail.com</h2>
          <h2>Аноним</h2>
        </div>
        <div class="control_wrapper">
          <h3 v-on:click="isEditPersonalData = true" class="noselect">РЕДАКТИРОВАТЬ</h3>
          <h3 class="noselect">ВЫЙТИ</h3>
        </div>
      </div>
    </div>
    <transition name="openBottom">
      <div class="editPersonalData" v-if="isEditPersonalData">
        <h3 class="closeButton noselect" v-on:click="isEditPersonalData = false">ЗАКРЫТЬ</h3>
        <div class="input_wrapper">
          <input type="text" name="name" placeholder="Ник">
          <input type="text" name="name" placeholder="Имя">
          <input type="email" name="name" placeholder="Email">
          <input type="text" name="name" placeholder="Город">
          <textarea rows="3" name="name" placeholder="О себе"></textarea>
          <p class="titleMessage">Входящие сообщения от пользователей:</p>
          <div class="privacy-select">
            <div class="privacy-select--button privacy-select--button__left" v-bind:class="{'privacy-select--button__active': privacy===true}" v-on:click="privacy = true">
              <p>Разрешить</p>
            </div>
            <div class="privacy-select--button privacy-select--button__right" v-bind:class="{'privacy-select--button__active': privacy===false}" v-on:click="privacy = false">
              <p>Запретить</p>
            </div>
          </div>
          <div class="save-button noselect" v-on:click="isEditPersonalData = false">
            <p>Сохранить</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
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
    }
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
    height: 80vh;
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
    transition: transform .5s;
  }
  .openBottom-enter {
    transform: translateY(80vh);
  }
  .openBottom-leave-to {
    transform: translateY(80vh);
  }
</style>
