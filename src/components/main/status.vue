<template>
  <div class="status">
    <transition-group name="list-complete" tag="div">
      <div class="status__item" v-for="item in items" :key="item.name" v-if="currentStatus === item.name || isOpen"  v-on:click="changeStatus(item.name)">
        <p>{{ item.name }}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'status',
  data () {
    return {
      items: [
        { name: 'Не ответил' },
        { name: 'Нет соединения' },
        { name: 'Что-то ещё' },
        { name: 'Иной статус' }
      ],
      currentStatus: 'Не ответил',
      isOpen: false
    }
  },
  methods: {
    changeStatus: function (name) {
      if (this.isOpen) {
        this.currentStatus = name
        this.isOpen = !this.isOpen
      } else {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  width: 80%;
  margin: 50px auto 0 auto;
  position: relative;

  .status__item {
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #d6d6d6;
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    transition: all .5s;
    p {
      margin: auto;
    }
  }
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
}
</style>
