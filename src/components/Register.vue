<template>
    <div class="Register">
        <div class="register_wrapper">
            <div class="menu_wrapper">
                <h3 class="active-tab">Регистрация</h3>
                <h3>Вход</h3>
            </div>
            <div class="input_wrapper">
                <input type="text" name="name" placeholder="Ник">
                <input type="email" name="name" placeholder="Email">
                <input type="text" name="name" placeholder="Город">
                <input type="password" name="name" placeholder="Пароль">
                <input type="password" name="name" placeholder="Повторение пароля">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
.register_wrapper {
    width: 300px;
    margin: 0 auto;
    padding-top: 100px;
    color: #D2D6DB;

    .menu_wrapper {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;

        h3 {
            margin-right: 30px;
            position: relative;
            font-weight: 100;
        }

        .active-tab::after {
            content: '';
            width: 117px;
            height: 2px;
            background-color: #1f807d;
            position: absolute;
            bottom: -2px;
            left: 0;
        }
    }
    .input_wrapper {
        $transition: .2s;

        @for $i from 1 through 5 {
            :nth-child(#{$i}) {
                transition: all .2s cubic-bezier(.4,0,1,1);
                $transitionDelay: $transition * $i;
                transition-delay: $transitionDelay;
                opacity: 1;
            }
        }

        input {
            transition: all .2s cubic-bezier(.4,0,1,1);
            opacity: 0;
            margin-bottom: 20px;
            height: 30px;
            width: 100%;
            background-color: transparent;
            border: 0;
            border-bottom: 1px solid #3E4E62;
            outline: none;
            font-size: 16px;
            padding-left: 5px;
            color: #D2D6DB;
            &::-webkit-input-placeholder{
                color: #6e7a89;;
            }

            &:focus {
                border-bottom: 1px solid #1f807d;
            }
        }
    }
}
</style>
