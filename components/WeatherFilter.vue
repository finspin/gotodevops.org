<template>
  <div class="row weather-filter">
    <div class="col-12">
      <div class="filter-label">Weather</div>
      <div class="row">
        <div class="col-4 pr-2 pr-sm-3">
          <div
            @click="applyWeatherFilter('cold')"
            :class="['weather', { active: isActive('cold') }]"
          >
            <font-awesome-icon icon="snowflake" class="mr-1" />COLD
          </div>
        </div>
        <div class="col-4 pr-2 pl-2 pr-sm-3 pl-sm-3">
          <div
            @click="applyWeatherFilter('mild')"
            :class="['weather', { active: isActive('mild') }]"
          >
            <font-awesome-icon icon="cloud" class="mr-1" />MILD
          </div>
        </div>
        <div class="col-4 pl-2 pl-sm-3">
          <div
            @click="applyWeatherFilter('warm')"
            :class="['weather', { active: isActive('warm') }]"
          >
            <font-awesome-icon icon="umbrella-beach" class="mr-1" />WARM
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "WeatherFilter",
  computed: {
    ...mapState(["filters"])
  },
  methods: {
    ...mapMutations(["UPDATE_WEATHER_FILTER"]),
    applyWeatherFilter: function(weather) {
      this.UPDATE_WEATHER_FILTER(weather);
    },
    isActive: function(weather) {
      return this.filters.weather === weather;
    }
  }
};
</script>

<style scoped>
.weather-filter {
  padding-bottom: 20px;
}

.weather {
  border: 1px solid #d4dde9;
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  padding: 9px 0;
  color: #545e6d;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}

.weather:hover {
  background-color: #eceef0;
}

.weather.active {
  background-color: #ffa630;
  border: 1px solid #ffa630;
  color: #fff;
}

.filter-label {
  font-size: 15px;
  color: #13273e;
  margin-bottom: 5px;
}

@media (max-width: 576px) {
  .weather {
    padding: 5px 0;
    font-weight: 400;
  }
}
</style>
