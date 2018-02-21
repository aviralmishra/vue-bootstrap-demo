<template>
  <p>
    {{greeting}} World!
    <button v-on:click="greet">Change</button>
  </p>
</template>

<script>
  export default {
    data() {
      return {
        greeting: 'Hello'
      }
    },
    methods: {
      greet() {
        this.greeting = 'Hi';
      }
    }
  }
</script>
