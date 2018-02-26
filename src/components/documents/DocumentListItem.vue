<template>
  <div class="col-xs-12 col-sm-12 col-md-6 d-flex align-items-stretch">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" :src="document.image">
      <div class="card-body no-gutters">
        <div class="col-xs-12 col-sm-12 col-md-12 d-flex justify-content-between">
          <span class="card-title document-list-item">{{document.title}}</span>
          <span class="card-title">{{document.status}}</span>
        </div>
        <p class="card-subtitle pb-2">{{this.formattedStartDate}} - {{this.formattedClosingDate}}</p>
        <p class="card-text">{{document.description}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">READ</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">LEARN MORE</button>
          </div>
          <small><font-awesome-icon icon="comments"/> {{document.comments}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import moment from 'moment';

  export default {
    name: 'DocumentListItem',
    props: ['document'],
    components: {
      FontAwesomeIcon
    },
    computed: {
      formattedStartDate: function() {
        return moment(new Date(this.document.startDate)).format('DD MMM YYYY');
      },
      formattedClosingDate: function() {
        return moment(new Date(this.document.closingDate)).format('DD MMM YYYY');
      }
    }
  }
</script>

<style lang="scss" scoped>
  $list-item-color: #0011ee;

  .document-list-item {
    color: $list-item-color;
  }
</style>
