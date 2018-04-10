<template>
  <div class="cabinet"
       v-bind:class="{'cabinet__open': isOpened===true}"
  >
    <div class="cabinet-namespace"
         v-on:click="isOpened = !isOpened"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'cabinet',
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  transition: .3s;
  position: absolute;
  width: 300px;
  height: 200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #1f807d;
  top: 0;
  left: calc(50% - 150px);
  transform: translateY(-200px);

  &.cabinet__open {
    transform: translateY(0);
  }

  .cabinet-namespace {
    position: absolute;
    width: 200px;
    height: 30px;
    background-color: #1f807d;
    bottom: -29px;
    left: calc(50% - 100px);
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
  }
}
</style>
