<template>
  <div class="list-group document-list">
    <ul>
      <document v-for="(item, i) in documents" :document="item" :key="i"/>
    </ul>
  </div>
</template>

<script>
  import Document from './Document.vue';

  export default {
    name: 'DocumentList',
    props: ['documents'],
    components: {
      'document': Document
    }
  }
</script>

<style lang="scss" scoped>
  .document-list {
    font-size: 2rem;
  }
</style>
