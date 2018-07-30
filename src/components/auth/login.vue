<template>
<div class="login">
    <input type="Email" name="name" placeholder="Email" v-model="objForLogin.Email">
    <input type="Password" name="name" placeholder="Пароль" v-model="objForLogin.Password">
    <div class="animate bubbly-button"
         v-if="objForLogin.Email &&
        objForLogin.Password"
         @click="login"
    >
        <div v-if="!status">
            <img src="../../assets/arrow-right.png">
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
  name: 'login',
  data () {
    return {
      objForLogin: {
        Email: '',
        Password: ''
      }
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
          alert(data)
        })
    }
  },
  computed: {
    status: function () {
      return this.$store.getters['auth/getStatus']
    },
    isLoginCompleted: function () {
      return this.objForLogin.Email !== '' && this.objForLogin.Password !== ''
    }
  }
}
</script>

<style lang="scss" scoped>
    .bubbly-button {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin: 20px 10px 20px auto;
        p, div {
            img {
                width: 32px;
            }
        }
    }
</style>
