<template>
  <li class="list-group-item document-item">
    {{document.title}}
  </li>
</template>

<script>
  export default {
    name: 'Document',
    props: ['document']
  }
</script>

<style lang="scss" scoped>
  $list-item-color: #0011ee;

  .document-item {
    color: $list-item-color;
  }
</style>
