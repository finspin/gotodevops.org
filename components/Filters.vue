<template>
  <div class="filters">
    <month-filter></month-filter>
    <continent-filter></continent-filter>
    <cost-filter></cost-filter>
    <weather-filter></weather-filter>
    <weekend-filter></weekend-filter>
  </div>
</template>

<script>
import MonthFilter from "./MonthFilter";
import CostFilter from "./CostFilter";
import WeatherFilter from "./WeatherFilter";
import ContinentFilter from "./ContinentFilter";
import WeekendFilter from "./WeekendFilter";

export default {
  name: "Filters",
  components: {
    MonthFilter,
    CostFilter,
    WeatherFilter,
    ContinentFilter,
    WeekendFilter
  }
};
</script>
