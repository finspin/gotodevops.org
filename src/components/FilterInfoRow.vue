<template>
  <div class="container d-md-none filter-info-row">
    <div class="row">
      <div class="col-12 text-right">
        <subscribe-button></subscribe-button>
        <filter-toggle-button></filter-toggle-button>
        <filter-info-modal></filter-info-modal>
      </div>
    </div>
  </div>
</template>

<script>
  import SubscribeButton from './SubscribeButton'
  import FilterInfoModal from './FilterInfoModal'
  import FilterToggleButton from './FilterToggleButton'

  export default {
    name: "FilterInfoRow",
    components: {
      SubscribeButton,
      FilterInfoModal,
      FilterToggleButton
    }
  }
</script>

<style scoped>
  .filter-info-row {
    padding-top: 15px;
    padding-bottom: 10px;
  }
</style>
