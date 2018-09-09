<template>
  <div class="row weather-filter">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <div @click="applyWeatherFilter('cold')" :class="['weather', { active: isActive('cold') }]">
            <i class="far fa-snowflake"></i>
          </div>
        </div>
        <div class="col-4">
          <div @click="applyWeatherFilter('mild')" :class="['weather', { active: isActive('mild') }]">
            <i class="fas fa-cloud"></i>
          </div>
        </div>
        <div class="col-4">
          <div @click="applyWeatherFilter('warm')" :class="['weather', { active: isActive('warm') }]">
            <i class="fas fa-umbrella-beach"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "WeatherFilter",
    computed: {
      ...mapState([
        'filters'
      ]),
    },
    methods: {
      ...mapMutations([
        'UPDATE_WEATHER_FILTER'
      ]),
      applyWeatherFilter: function (weather) {
        this.UPDATE_WEATHER_FILTER(weather);
      },
      isActive: function (weather) {
        return this.filters.weather === weather;
      }
    },
  }
</script>

<style scoped>
  .weather {
    border: 1px solid #e3e3e3;
    font-size: 13px;
    border-radius: 5px;
    padding: 7px 0;
    color: #111;
    background-color: #f1f1f1;
    cursor: pointer;
    text-align: center;
  }

  .weather.active {
    background-color: #e6616d;
    color: #fff;
  }
</style>
