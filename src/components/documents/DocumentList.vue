<template>
  <div class="list-group document-list">
    <ul>
      <document-list-item v-for="(item, i) in documents" :document="item" :key="i"/>
    </ul>
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
