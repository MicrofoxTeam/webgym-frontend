<template>
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
</template>

<script>
export default {
  name: 'anotherAccount',
  data () {
    return {
      data: {
      }
    }
  },
  computed: {
    account: function () {
      return this.$store.getters['account/getMessages']
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('message/getMessages')
  }
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';

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
