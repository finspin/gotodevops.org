<template>
  <div class="container d-md-none info-row">
    <div class="row">
      <div class="col-12 text-right">
        <subscribe-button></subscribe-button>
        <filter-toggle-button></filter-toggle-button>
        <info-modal></info-modal>
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
    padding-bottom: 10px;
  }
</style>
