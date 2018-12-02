<template>
  <div class="filters">
    <div class="collapse d-md-none" id="collapse-filters">
      <month-filter></month-filter>
      <continent-filter></continent-filter>
      <cost-filter></cost-filter>
      <weather-filter></weather-filter>
      <!--<conference-list-info></conference-list-info>-->
    </div>
    <div class="d-none d-md-block">
      <month-filter></month-filter>
      <continent-filter></continent-filter>
      <cost-filter></cost-filter>
      <weather-filter></weather-filter>
      <subscription-form></subscription-form>
      <!--<conference-list-info></conference-list-info>-->
    </div>
  </div>
</template>

<script>
  import MonthFilter from './MonthFilter'
  import CostFilter from './CostFilter'
  import WeatherFilter from './WeatherFilter'
  import ContinentFilter from './ContinentFilter'
  import ConferenceListInfo from './ConferenceListInfo'
  import SubscriptionForm from './SubscriptionForm'

  export default {
    name: "Filters",
    components: {
      MonthFilter,
      CostFilter,
      WeatherFilter,
      ContinentFilter,
      ConferenceListInfo,
      SubscriptionForm
    }
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    .filters {
      border-radius: 9px;
      background-color: aliceblue;
    }
  }
</style>
