<template>
  <div class="container">
    <span class="greet">{{greeting}} World!</span>
    <button class="btn btn-primary" v-on:click="greet">Espanol</button>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        greeting: 'Hello'
      }
    },
    methods: {
      greet() {
        this.greeting = 'Hola';
      }
    }
  }
</script>

<style lang="scss">
  @import './app.scss';
</style>
