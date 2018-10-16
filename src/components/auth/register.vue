<template>
<div class="register">
    <input type="text" name="name" placeholder="Ник"
           v-model="objForRegister.NickName"
    >
    <input type="Email" name="name" placeholder="Email"
           v-model="objForRegister.Email"
    >
    <input type="text" name="name" placeholder="Город"
           v-model="objForRegister.City"
    >
    <input type="Password" name="name" placeholder="Пароль"
           v-model="objForRegister.Password"
    >
    <input type="Password" name="name" placeholder="Повторение пароля"
           v-model="objForRegister.PasswordRepeat"
           v-bind:class="{
             'incorrect': objForRegister.Password !== objForRegister.PasswordRepeat && objForRegister.Password !== ''
           }"
    >
    <div class="switch">
        <div class="icon"
             @click="objForRegister.Sex='1'"
             v-bind:class="{
                    'left': objForRegister.Sex === '1'
             }"
        >
            <div>
                <img src="../../assets/female.png">
            </div>
        </div>
        <div class="slider"
             v-bind:class="{
                    'left': objForRegister.Sex === '1',
                    'right': objForRegister.Sex === '2',
             }"
        >
            <div class="slider-tap"
                 @click="objForRegister.Sex='1'"
            ></div>
            <div class="button"
                 v-bind:class="{
                    'left': objForRegister.Sex === '1',
                    'right': objForRegister.Sex === '2',
                 }"
            ></div>
            <div class="slider-tap"
                 @click="objForRegister.Sex='2'"
            ></div>
        </div>
        <div class="icon"
             @click="objForRegister.Sex='2'"
             v-bind:class="{
                    'right': objForRegister.Sex === '2'
             }"
        >
            <div>
                <img src="../../assets/male.png">
            </div>
        </div>
    </div>
    <div class="animate bubbly-button"
        v-if="objForRegister.NickName &&
        objForRegister.Email &&
        objForRegister.Sex &&
        objForRegister.Password &&
        objForRegister.Password === objForRegister.PasswordRepeat"
         @click="register"
    >
        <div v-if="!status">
            <img src="../../assets/finish.png">
        </div>
        <div v-else>
            <div style="margin: 10px auto; width: 30px; height: 30px">
                <svg width="30" height="30" version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="50px" y="0px"
                  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                 <path fill="#ffffff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
                  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
                      <animateTransform
                         attributeName="transform"
                         attributeType="XML"
                         type="rotate"
                         dur="2s"
                         from="0 50 50"
                         to="360 50 50"
                         repeatCount="indefinite" />
                  </path>
                 <path fill="#ffffff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
                  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
                      <animateTransform
                         attributeName="transform"
                         attributeType="XML"
                         type="rotate"
                         dur="1s"
                         from="0 50 50"
                         to="-360 50 50"
                         repeatCount="indefinite" />
                  </path>
                 <path fill="#ffffff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
                  L82,35.7z">
                      <animateTransform
                         attributeName="transform"
                         attributeType="XML"
                         type="rotate"
                         dur="2s"
                         from="0 50 50"
                         to="360 50 50"
                         repeatCount="indefinite" />
                  </path>
                </svg>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      objForRegister: {
        Sex: '',
        NickName: '',
        Email: '',
        City: '',
        Password: '',
        PasswordRepeat: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('auth/register', this.objForRegister)
        .then(() => {
          if (this.$store.getters['auth/checkLogin']) {
            this.$router.push('programs')
          }
        })
        .catch((data) => {
          console.log(data)
          alert(data)
        })
    }
  },
  computed: {
    status: function () {
      return this.$store.getters['auth/getStatus']
    },
    isRegisterCompleted: function () {
      return this.objForRegister.Password === this.objForRegister.PasswordRepeat && this.objForRegister.Password !== '' && this.objForRegister.NickName !== '' && this.objForRegister.Email !== ''
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../main.scss';

    .register {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;

        .incorrect {
            border-bottom: 1px solid $error-color;
        }
    }

    .bubbly-button {
        margin: 40px auto 20px auto;
    }
</style>
