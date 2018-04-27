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
          <h3>РЕДАКТИРОВАТЬ</h3>
          <h3>ВЫЙТИ</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  components: {
    'editPersonalData': () => import('./account/editPersonalData.vue')
  },
  data () {
    return {}
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
    position: relative;
    z-index: 1;
  }

  .account_wrapper {
    position: relative;
    width: 320px;
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
</style>
