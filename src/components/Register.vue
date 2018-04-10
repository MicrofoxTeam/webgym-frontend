<template>
    <div class="Register">
        <div class="menu_wrapper">
            <h3 v-on:click="activeTab = 'register'">Регистрация</h3>
            <h3 v-on:click="activeTab = 'login'">Вход</h3>
            <div class="active-tab__line" v-bind:class="{register: activeTab==='register', login: activeTab==='login'}"></div>
        </div>
        <transition :name="activeTab">
            <div class="input_wrapper__register" v-if="activeTab==='register'" key="register">
                <transition-group name="fade" appear>
                    <input type="text" name="name" placeholder="Ник" key="1" v-model="registerName">
                    <input type="email" name="name" placeholder="Email" key="2">
                    <input type="text" name="name" placeholder="Город" key="3">
                    <input type="password" name="name" placeholder="Пароль" key="4" v-model="registerPassword">
                    <input type="password" name="name" placeholder="Повторение пароля"
                           key="5"
                           v-model="registerPasswordRepeat"
                           v-bind:class="{'incorrect-input': registerPassword!==registerPasswordRepeat && registerPassword!==''}"
                    >
                    <div class="gender-select" key="6">
                        <div class="gender-select--button gender-select--button__left" v-bind:class="{'gender-select--button__active': gender==='male'}" v-on:click="gender = 'male'">
                            <p>Мужской</p>
                        </div>
                        <div class="gender-select--button gender-select--button__right" v-bind:class="{'gender-select--button__active': gender==='female'}" v-on:click="gender = 'female'">
                            <p>Женский</p>
                        </div>
                    </div>
                </transition-group>
                <a href="/">
                    <transition name="fade">
                        <div class="next-button"
                             v-if="registerPassword===registerPasswordRepeat && registerPassword!==''"
                        >
                            <p>Зарегистрироваться</p>
                        </div>
                    </transition>
                </a>
            </div>
            <div class="input_wrapper__login"  v-if="activeTab==='login'" key="login">
                <input type="email" name="name" placeholder="Email" v-model="loginEmail">
                <input type="password" name="name" placeholder="Пароль" v-model="loginPassword">
                <a href="/">
                    <transition name="fade">
                        <div class="next-button" v-if="loginEmail!=='' && loginPassword!==''"><p>Войти</p></div>
                    </transition>
                </a>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      activeTab: 'register',
      gender: 'male',
      loginEmail: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerCity: '',
      registerPassword: '',
      registerPasswordRepeat: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.Register {
    width: 300px;
    margin: 0 auto;
    padding-top: 100px;
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
            height: 2px;
            background-color: $accent-color;
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
    .input_wrapper__register {
        position: absolute;
        @for $i from 1 through 10 {
            :nth-child(#{$i}).fade-enter-active {
                $transitionDelay: .1 * $i;
                transition-delay: #{$transitionDelay}s;
            }
        }

        padding-bottom: 80px;

        .gender-select {
            margin-top: 20px;
            height: 40px;
            width: 100%;
            background-color: transparent;
            border-radius: 20px;
            display: flex;
            cursor: pointer;
            user-select: none;

            &:active, &:focus {
                outline: none;
            }

            &::-moz-focus-inner {
                border: 0;
            }

            .gender-select--button {
                width: 50%;
                display: flex;
                border: 1px solid $secondary-color;

                p {
                    margin: auto;
                }
            }

            .gender-select--button__left {
                border-radius: 20px 0 0 20px;
                border-right: none!important;
            }

            .gender-select--button__right {
                border-radius: 0 20px 20px 0;
                border-left: none!important;
            }

            .gender-select--button__active {
                background-color: $accent-color;
                border: 1px solid $accent-color;
            }
        }
    }
    .input_wrapper__login {
        position: absolute;
        @for $i from 1 through 3 {
            :nth-child(#{$i}).fade-enter-active {
                $transitionDelay: .1 * $i;
                transition-delay: #{$transitionDelay}s;
            }
        }

        padding-bottom: 80px;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
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
