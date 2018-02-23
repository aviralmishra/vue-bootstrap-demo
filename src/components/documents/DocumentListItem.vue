<template>
  <li class="list-group-item document-list-item">
    <font-awesome-icon icon="file" /> {{document.title}}
  </li>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

  export default {
    name: 'DocumentListItem',
    props: ['document'],
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style lang="scss" scoped>
  $list-item-color: #0011ee;

  .document-list-item {
    color: $list-item-color;
  }
</style>
