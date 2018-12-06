<template>
  <div class="container d-md-none filter-info-row no-padding">
    <div class="row">
      <div class="col-12 text-right no-padding">
        <!--<subscribe-button></subscribe-button>-->
        <filter-toggle-button></filter-toggle-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SubscribeButton from './SubscribeButton'
  import FilterInfoModal from './FilterInfoModal'
  import FilterToggleButton from './FilterToggleButton'
  import SubscriptionForm from './SubscriptionForm'

  export default {
    name: "FilterInfoRow",
    components: {
      SubscribeButton,
      FilterInfoModal,
      FilterToggleButton,
      SubscriptionForm
    }
  }
</script>

<style scoped>
  .filter-info-row {
    padding-top: 15px;
    padding-bottom: 10px;
  }
</style>
