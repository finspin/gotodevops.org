<template>
  <div class="filters">
    <month-filter></month-filter>
    <virtual-event-filter></virtual-event-filter>
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
import VirtualEventFilter from "./VirtualEventFilter";

export default {
  name: "Filters",
  components: {
    MonthFilter,
    CostFilter,
    WeatherFilter,
    ContinentFilter,
    WeekendFilter,
    VirtualEventFilter
  }
};
</script>
