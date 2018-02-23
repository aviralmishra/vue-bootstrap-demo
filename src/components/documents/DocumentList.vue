<template>
  <div class="row document-list">
    <document-list-item v-for="(item, i) in documents" :document="item" :key="i"/>
  </div>
</template>

<script>
  import DocumentListItem from './DocumentListItem.vue';

  export default {
    name: 'DocumentList',
    props: ['documents'],
    components: {
      'document-list-item': DocumentListItem
    }
  }
</script>

<style lang="scss" scoped>
  .document-list {
    font-size: 1.2rem;
  }
</style>
