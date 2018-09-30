<template>
  <div class="container d-md-none info-row">
    <div class="row">
      <div class="col-12 text-right">
          <info-modal></info-modal>
          <subscribe-button></subscribe-button>
          <filter-toggle-button></filter-toggle-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SubscribeButton from './SubscribeButton'
  import InfoModal from './InfoModal'
  import FilterToggleButton from './FilterToggleButton'

  export default {
    name: "InfoRow",
    components: {
      SubscribeButton,
      InfoModal,
      FilterToggleButton
    }
  }
</script>

<style scoped>
  .info-row {
    padding-top: 15px;
  }
</style>
