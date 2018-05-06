<template>
    <div class="Messages">
        <transition-group name="fade" appear>
            <div class="message" v-for="message in messages" :key="message.Id">
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
  data () {
    return {
      data: ''
    }
  },
  computed: {
    messages: function () {
      return this.$store.getters['message/getMessages']
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
</style>
