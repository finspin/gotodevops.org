<template>
  <div id="filters" class="container">
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

  export default {
    name: "Filters",
    components: {
      MonthFilter,
      CostFilter,
      WeatherFilter,
      ContinentFilter
    }
  }
</script>

<style scoped>
  #filters {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: aliceblue;
  }

  @media (min-width: 768px) {
    #filters {
      background-color: #fff;
    }
  }
</style>
