<template>
    <div class="Register">
        <div class="register_wrapper">
            <div class="menu_wrapper">
                <h3 v-on:click="activeTab = 'register'">Регистрация</h3>
                <h3 v-on:click="activeTab = 'login'">Вход</h3>
                <div class="active-tab__line" v-bind:class="{register: activeTab === 'register', login: activeTab==='login'}"></div>
            </div>
            <transition :name="activeTab">
                <div class="input-wrapper" v-if="activeTab === 'register'" key="register">
                    <register></register>
                </div>
                <div class="input-wrapper"  v-if="activeTab === 'login'" key="login">
                    <login></login>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Auth',
  components: {
    'register': () => import('./auth/register.vue'),
    'login': () => import('./auth/login.vue')
  },
  data () {
    return {
      activeTab: 'register',
      errorText: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', this.objForLogin)
        .then(() => {
          if (this.$store.getters['auth/checkLogin']) {
            this.$router.push('programs')
          }
        })
        .catch((data) => {
          console.log(data)
          this.errorText = data
        })
    },
    register () {
      this.$store.dispatch('auth/register', this.objForRegister)
        .then(() => {
          if (this.$store.getters['auth/checkLogin']) {
            this.$router.push('programs')
          }
        })
        .catch((data) => {
          console.log(data)
          this.errorText = data
        })
    }
  },
  computed: {
    status: function () {
      return this.$store.getters['auth/getStatus']
    },
    isRegisterCompleted: function () {
      return this.objForRegister.Password === this.objForRegister.PasswordRepeat && this.objForRegister.Password !== '' && this.objForRegister.NickName !== '' && this.objForRegister.Email !== ''
    },
    isLoginComleted: function () {
      return this.objForLogin.Email !== '' && this.objForLogin.Password !== ''
    }
  },
  beforeCreate: function () {
    if (this.$store.getters['auth/checkLogin']) {
      this.$router.push('programs')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.Register {
    width: 100vw;
    height: 100vh;
    background-color: $background-color;
    z-index: 100;
    position: relative;
    overflow-y: scroll;

    .register_wrapper {
        width: 300px;
        margin: 0 auto;
        padding-top: 30px;
        color: $text-color;
        position: relative;

        .menu_wrapper {
            display: flex;
            flex-direction: row;
            margin-bottom: 30px;
            justify-content: space-between;
            width: 200px;
            position: relative;

            h3 {
                position: relative;
                font-weight: 100;
                user-select: none;
            }

            .active-tab__line {
                height: 1px;
                background-color: $dark-green-color;
                position: absolute;
                bottom: -2px;
                transition: .5s $cubic_bezier;
                &.register {
                    width: 117px;
                    left: 0;
                }
                &.login {
                    width: 46px;
                    transform: translateX(156px);
                }
            }
        }

        .input-wrapper {
            position: absolute;
            padding-bottom: 80px;
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opaCity: 0;
}

.register-enter-active, .register-leave-active, .login-enter-active, .login-leave-active {
    transition: transform .5s;
}
.register-enter {
    transform: translateX(-100vw);
}

.register-leave-to {
    transform: translateX(100vw);
}
.login-enter {
    transform: translateX(100vw);
}

.login-leave-to {
    transform: translateX(-100vw);
}
</style>
