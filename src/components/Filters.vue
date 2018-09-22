<template>
  <div id="filters" class="container">
    <div class="row">
      <div class="col-4 offset-8">
        <!--<a class="" data-toggle="collapse" href="#collapse-filters" role="button" aria-expanded="false" aria-controls="collapse-filters">-->
          <!--<i class="fas fa-filter"></i> FILTERS-->
        <!--</a>-->
        <button class="btn btn-filter btn-sm float-right" type="button" data-toggle="collapse" data-target="#collapse-filters"
                aria-expanded="false" aria-controls="collapse-filters">
          <i class="fas fa-filter"></i> FILTERS
        </button>
      </div>
    </div>
    <div class="collapse" id="collapse-filters">
      <month-filter></month-filter>
      <continent-filter></continent-filter>
      <cost-filter></cost-filter>
      <weather-filter></weather-filter>
    </div>
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
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: aliceblue;
  }

  .btn-filter {
    background-color: #ff2f3f;
    color: #fff;
    border: 1px solid #ff2f3f;
  }



  @media (min-width: 768px) {
    #filters {
      border-radius: 9px;
    }
  }
</style>
