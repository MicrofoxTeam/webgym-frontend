<template>
    <div class="wrapper">
        <div class="menu_wrapper">
            <h3 v-on:click="activeTab = 'register'">Регистрация</h3>
            <h3 v-on:click="activeTab = 'login'">Вход</h3>
            <div class="active-tab__line" v-bind:class="{register: activeTab==='register', login: activeTab==='login'}"></div>
        </div>
        <transition :name="activeTab">
            <div class="input_wrapper__register" v-if="activeTab==='register'" key="register">
                <transition-group name="fade" appear>
                    <input type="text" name="name" placeholder="Ник" key="1">
                    <input type="email" name="name" placeholder="Email" key="2">
                    <input type="text" name="name" placeholder="Город" key="3">
                    <input type="password" name="name" placeholder="Пароль" key="4">
                    <input type="password" name="name" placeholder="Повторение пароля" key="5">
                </transition-group>
            </div>
            <div class="input_wrapper__login"  v-if="activeTab==='login'" key="login">
                <transition-group name="fade" appear>
                    <input type="email" name="name" placeholder="Email" key="1">
                    <input type="password" name="name" placeholder="Пароль" key="2">
                </transition-group>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      activeTab: 'register'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.wrapper {
    width: 300px;
    margin: 0 auto;
    padding-top: 100px;
    color: #D2D6DB;
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
        }

        .active-tab__line {
            height: 2px;
            background-color: #1f807d;
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
        @for $i from 1 through 6 {
            :nth-child(#{$i}).fade-enter-active {
                $transitionDelay: .07 * $i;
                transition-delay: #{$transitionDelay}s;
            }
        }
    }
    .input_wrapper__login {
        position: absolute;
        @for $i from 1 through 3 {
            :nth-child(#{$i}).fade-enter-active {
                $transitionDelay: .07 * $i;
                transition-delay: #{$transitionDelay}s;
            }
        }
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
