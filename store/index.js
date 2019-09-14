import Vuex from 'vuex'
import conferences from '../static/conferences.json'


const createStore = () => {
  return new Vuex.Store({
    state: {
      conferences: conferences,
      filters: {
        cost: null,
        months: [],
        weather: null,
        continent: null
      }
    },
    getters: {
      numberOfConferences: state => {
        // Don't count conferences with start day older than today
        return _.filter(state.conferences, function (conference) {
          const confStartDate = new Date(conference.date.start)
          if (confStartDate >= new Date()) {
            return conference
          }
        }).length
      },
      numberOfDisplayedConferences: (state, context) => {
        return context.filteredConferences.length
      },
      filteredConferences: (state) => {
        const activeCostFilter = state.filters.cost
        const activeMonthFilter = state.filters.months
        const activeWeatherFilter = state.filters.weather
        const activeContinentFilter = state.filters.continent


        let filteredConferences = _.filter(state.conferences, function (conference) {
          let monthMatch, costMatch, continentMatch = false, weatherMatch = false, show = true

          // Month filter
          const locale = 'en-us'
          const confStartDate = new Date(conference.date.start)
          const confStartMonth = confStartDate.toLocaleString(locale, { month: 'short' }).toUpperCase()
          const confStartYear = confStartDate.getFullYear().toString()

          monthMatch = activeMonthFilter.length === 0 ? true : _.findIndex(state.filters.months, {
            month: confStartMonth,
            year: confStartYear
          }) > -1

          // Cost filter
          costMatch = activeCostFilter === null ? true : conference.cost <= activeCostFilter

          // Weather filter
          if (activeWeatherFilter === null) {
            weatherMatch = true
          } else if (activeWeatherFilter === 'cold' && conference.temperature.celsius < 10) {
            weatherMatch = true
          } else if (activeWeatherFilter === 'mild' && (conference.temperature.celsius >= 10 && conference.temperature.celsius < 20)) {
            weatherMatch = true
          } else if (activeWeatherFilter === 'warm' && conference.temperature.celsius >= 20) {
            weatherMatch = true
          }

          // Continent filter
          if (activeContinentFilter === null) {
            continentMatch = true
          } else if (activeContinentFilter === 'Americas' && ['North America', 'South America'].indexOf(conference.location.continent) > -1) {
            continentMatch = true
          } else if (activeContinentFilter === 'Europe' && conference.location.continent === 'Europe') {
            continentMatch = true
          } else if (
            activeContinentFilter === 'Asia / Australia' &&
            ['Asia', 'Australia'].indexOf(conference.location.continent) > -1
          ) {
            continentMatch = true
          }

          // Hide conferences with start day older than today
          if (confStartDate < new Date()) {
            show = false
          }

          return monthMatch && costMatch && weatherMatch && continentMatch && show
        })

        return _.orderBy(filteredConferences, 'date.start')
      }
    },
    mutations: {
      UPDATE_COST_FILTER: (state, cost) => {
        state.filters.cost = state.filters.cost === cost ? null : cost
      },
      UPDATE_MONTH_FILTER: (state, payload) => {
        const index = _.findIndex(state.filters.months, payload)

        index > -1 ? state.filters.months.splice(index, 1) : state.filters.months.push(payload)
      },
      UPDATE_WEATHER_FILTER: (state, weather) => {
        state.filters.weather = state.filters.weather === weather ? null : state.filters.weather = weather
      },
      UPDATE_CONTINENT_FILTER: (state, continent) => {
        state.filters.continent = state.filters.continent === continent ? null : continent
      },
      CLEAR_ALL_FILTERS: state => {
        state.filters.cost = null
        state.filters.months = []
        state.filters.weather = null
        state.filters.continent = null
      }
    },
    actions: {}

  })
}

export default createStore
