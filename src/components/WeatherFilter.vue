<template>
  <div class="row weather-filter">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <div @click="applyWeatherFilter('cold')" :class="['weather', { active: isActive('cold') }]">
            <i class="far fa-snowflake"></i>
            <!--<i class="wi wi-snowflake-cold"></i>-->
            <!--COLD-->
          </div>
        </div>
        <div class="col-4">
          <div @click="applyWeatherFilter('mild')" :class="['weather', { active: isActive('mild') }]">
            <!--<i class="fas fa-cloud"></i>-->
            <i class="wi wi-day-cloudy"></i>
           <!--WARM-->
          </div>
        </div>
        <div class="col-4">
          <div @click="applyWeatherFilter('warm')" :class="['weather', { active: isActive('warm') }]">
            <i class="fas fa-umbrella-beach"></i>
            <!--<i class="wi wi-day-sunny"></i>-->
            <!--HOT-->
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
  .weather-filter {
    padding-bottom: 10px;
  }

  .weather {
    border: 1px solid #e3e3e3;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px 0;
    color: #111;
    background-color: #f1f1f1;
    cursor: pointer;
    text-align: center;
  }

  .weather.active {
    background-color: #ff2f3f;
    color: #fff;
  }
</style>
