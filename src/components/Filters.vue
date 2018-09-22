<template>
  <div>
    <filter-toggle></filter-toggle>
    <div id="filters" class="container">
      <div class="collapse d-md-none" id="collapse-filters">
        <month-filter></month-filter>
        <continent-filter></continent-filter>
        <cost-filter></cost-filter>
        <weather-filter></weather-filter>
      </div>
      <div class="d-none d-md-block">
        <month-filter></month-filter>
        <continent-filter></continent-filter>
        <cost-filter></cost-filter>
        <weather-filter></weather-filter>
      </div>
    </div>
  </div>
</template>

<script>
  import MonthFilter from './MonthFilter'
  import CostFilter from './CostFilter'
  import WeatherFilter from './WeatherFilter'
  import ContinentFilter from './ContinentFilter'
  import FilterToggle from './FilterToggle'

  export default {
    name: "Filters",
    components: {
      MonthFilter,
      CostFilter,
      WeatherFilter,
      ContinentFilter,
      FilterToggle
    }
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    #filters {
      border-radius: 9px;
      background-color: aliceblue;
    }
  }
</style>
