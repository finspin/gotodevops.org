<template>
  <div class="filters">
    <month-filter></month-filter>
    <continent-filter></continent-filter>
    <cost-filter></cost-filter>
    <weather-filter></weather-filter>
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
</style>
