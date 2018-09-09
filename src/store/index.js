import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    conferences: require("json-loader!yaml-loader!../conferences.yml"),
    filters: {
      cost: null,
      months: [],
      weather: null
    }
  },
  getters: {
    numberOfConferences: state => {
      return state.conferences.length;
    },
    numberOfDisplayedConferences: (state, context) => {
      return context.filteredConferences.length;
    },
    filteredConferences: (state) => {
      const activeCostFilter = state.filters.cost;
      const activeMonthFilter = state.filters.months;
      const activeWeatherFilter = state.filters.weather;


      return _.filter(state.conferences, function (conference) {
        let monthMatch, costMatch, weatherMatch = false;

        // Month filter
        const confDate = new Date(conference.startDate * 1000);
        const conferenceMonth = confDate.toLocaleString('en-us', {month: "short"}).toUpperCase();

        monthMatch = activeMonthFilter.length === 0 ? true : activeMonthFilter.indexOf(conferenceMonth) > -1;

        // Cost filter
        costMatch = activeCostFilter === null ? true : conference.cost <= activeCostFilter;

        // Weather filter
        if (activeWeatherFilter === null) {
          weatherMatch = true;
        } else if (activeWeatherFilter === 'cold' && conference.temperature <= 10) {
          weatherMatch = true;
        } else if (activeWeatherFilter === 'mild' && (conference.temperature > 10 && conference.temperature < 20)) {
          weatherMatch = true;
        } else if (activeWeatherFilter === 'warm' && conference.temperature >= 20) {
          weatherMatch = true
        }

        return monthMatch && costMatch && weatherMatch;
      })
    }
  },
  mutations: {
    UPDATE_COST_FILTER: (state, cost) => {
      state.filters.cost = state.filters.cost === cost ? null : cost
    },
    UPDATE_MONTH_FILTER: (state, month) => {
      const index = state.filters.months.indexOf(month);

      index > -1 ? state.filters.months.splice(index, 1) : state.filters.months.push(month)
    },
    UPDATE_WEATHER_FILTER: (state, weather) => {
      state.filters.weather = state.filters.weather === weather ? null : state.filters.weather = weather
    },
    CLEAR_ALL_FILTERS: state => {
      state.filters.cost = null;
      state.filters.months = [];
      state.filters.weather = null;
    }
  }
  ,
  actions: {}
})
