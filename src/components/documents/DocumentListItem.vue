<template>
  <div class="col-md-6 d-flex align-items-stretch document-list-item">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" :src="document.image">
      <div class="card-body">
        <p class="card-text"><font-awesome-icon icon="file"/> {{document.title}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">READ</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">LEARN MORE</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
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
