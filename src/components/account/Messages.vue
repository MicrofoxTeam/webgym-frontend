<template>
    <div class="Messages">
        <transition name="fade">
            <preloader v-if="isLoaded"></preloader>
        </transition>
        <div class="new-message shadow-block" v-on:click="isOpened.find=true">
            <p v-if="!isOpened.find">Новое сообщение</p>
            <div class="user-find" v-if="isOpened.find">
                <input placeholder="Кому написать.." v-model="findField.NickName" v-on:keyup="findByNick">
                <div
                        class="user-find__item shadow-block"
                        v-for="item of usersByFind"
                        v-bind:key="item"
                >{{ item }}</div>
            </div>
        </div>
        <transition-group name="fade" appear>
            <div class="message shadow-block" v-for="message in messages" :key="message.Id">
                <div class="message__avatar"></div>
                <div class="message__container">
                    <div class="message__wrapper">
                        <div class="message__name">{{ message.UserName }}</div>
                        <div class="message__date">{{ message.Date }}</div>
                    </div>
                    <div class="message__text">
                        {{ message.Text }}
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
  name: 'Messages',
  components: {
    'preloader': () => import('../preloader.vue')
  },
  data () {
    return {
      isOpened: {
        find: false
      },
      findField: {},
      usersByFind: []
    }
  },
  methods: {
    findByNick: function (e) {
      this.usersByFind = ['Serega', 'Faustus']
      this.$store.dispatch('message/searchUsers', this.findField)
        .then(() => {
          this.findField = {}
        })
        .catch((data) => {
          alert(data)
        })
    }
  },
  computed: {
    messages: function () {
      return this.$store.getters['message/getMessages']
    },
    isLoaded: function () {
      return this.$store.getters['message/getStatus']
    },
    usersByFind1: function () {
      return this.$store.getters['message/getUsersByFind']
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('message/getMessages')
  }
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';
    .Messages {
        width: 310px;
        height: auto;
        margin: 10px auto;
        color: $text-color;
        @include waterfall(15, .1, fade);

        .message {
            margin-top: 12px;
            width: 100%;
            padding: 10px;
            display: flex;
            flex-direction: row;
            background-color: $background_module-color;
            border-radius: 15px;

            .message__avatar {
                width: 40px;
                height: 40px;
                background-color: $accent-color;
                border-radius: 20px;
            }

            .message__container {
                width: 250px;
                padding-left: 10px;

                .message__wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .message__name {
                        font-size: 14px;
                    }
                    .message__date {
                        font-size: 12px;
                        color: $secondary-color;
                    }
                }

                .message__text {
                    padding-top: 10px;
                    font-size: 13px;
                }
            }
        }
    }

    .new-message {
        margin-top: 12px;
        width: 100%;
        min-height: 51px;
        padding: 10px;
        display: flex;
        background-color: $background_module-color;
        border-radius: 15px;

        p {
            margin: auto;
        }

        .user-find {
            width: 100%;
            background-color: $background_module-color;
            padding: 10px;
            border-radius: 6px;

            input {
                margin: 10px 0;
            }
            .user-find__item {
                position: relative;
                width: 100%;
                padding: 8px;
                margin-bottom: 4px;
                position: relative;
                color: $text-color;
                border-radius: 4px;
                background-color: $background_module__light-color;

                &:after {
                    content: '↪';
                    position: absolute;
                    right: 10px;
                    top: 8px;
                }
            }
        }
    }
</style>
