<template>
  <div class="container">
    <document-list :documents='documents' />
  </div>
</template>

<script>
  import data from './data';
  import DocumentList from './components/documents/DocumentList.vue';

  export default {
    name: 'Main',
    components: {
      'document-list': DocumentList
    },
    data() {
      return {
        documents: data.documents
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import './app.scss';
</style>
