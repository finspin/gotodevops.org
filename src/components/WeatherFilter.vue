<template>
  <div class="row weather-filter">
    <div class="col-12">
      <div class="filter-label">Weather</div>
      <div class="row">
        <div class="col-4 pr-2 pr-sm-3">
          <div @click="applyWeatherFilter('cold')" :class="['weather', { active: isActive('cold') }]">
            <i class="far fa-snowflake mr-1"></i>
            COLD
          </div>
        </div>
        <div class="col-4 pr-2 pl-2 pr-sm-3 pl-sm-3">
          <div @click="applyWeatherFilter('mild')" :class="['weather', { active: isActive('mild') }]">
            <i class="fas fa-cloud mr-1"></i>
           MILD
          </div>
        </div>
        <div class="col-4 pl-2 pl-sm-3">
          <div @click="applyWeatherFilter('warm')" :class="['weather', { active: isActive('warm') }]">
            <i class="fas fa-umbrella-beach mr-1"></i>
            WARM
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
    padding-bottom: 20px;
  }

  .weather {
    border: 1px solid #D4DDE9;
    font-size: 13px;
    font-weight: 600;
    border-radius: 5px;
    padding: 9px 0;
    color: #545e6d;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
  }

  .weather:hover {
    background-color: #ECEEF0;
  }

  .weather.active {
    background-color: #6542CB;
    color: #fff;
  }

  .filter-label {
    font-size: 15px;
    color: #13273E;
    margin-bottom: 5px;
  }

  @media (max-width: 576px) {
    .weather {
      padding: 5px 0;
      font-weight: 400;
    }
  }
</style>
