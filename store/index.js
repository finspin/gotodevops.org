import Vuex from "vuex";
import conferences from "../static/conferences.json";

const createStore = () => {
  return new Vuex.Store({
    state: {
      conferences: conferences,
      filters: {
        cost: null,
        months: [],
        weather: null,
        continent: null,
        touchesWeekend: null
      }
    },
    getters: {
      numberOfConferences: state => {
        // Don't count conferences with start day older than today
        return _.filter(state.conferences, function(conference) {
          const confStartDate = new Date(conference.date.start);

          // Filter out conferences that have set conference.display to false
          let display = true;
          if (conference.hasOwnProperty("display")) {
            display = conference.display;
          }

          if (confStartDate >= new Date() && !conference.sponsored && display) {
            return conference;
          }
        }).length;
      },
      numberOfDisplayedConferences: (state, context) => {
        return context.filteredConferences.length;
      },
      sponsoredConferences: state => {
        return _.filter(state.conferences, function(conference) {
          return conference.sponsored;
        });
      },
      filteredConferences: state => {
        const activeCostFilter = state.filters.cost;
        const activeMonthFilter = state.filters.months;
        const activeWeatherFilter = state.filters.weather;
        const activeContinentFilter = state.filters.continent;
        const activeWeekendFilter = state.filters.touchesWeekend;

        let filteredConferences = _.filter(state.conferences, function(
          conference
        ) {
          let monthMatch,
            costMatch,
            continentMatch = false,
            weatherMatch = false,
            touchesWeekendMatch = true,
            show = true,
            display = true;

          // Month filter
          const locale = "en-us";
          const confStartDate = new Date(conference.date.start);
          const confStartMonth = confStartDate
            .toLocaleString(locale, { month: "short" })
            .toUpperCase();
          const confStartYear = confStartDate.getFullYear().toString();

          monthMatch =
            activeMonthFilter.length === 0
              ? true
              : _.findIndex(state.filters.months, {
                  month: confStartMonth,
                  year: confStartYear
                }) > -1;

          // Cost filter
          costMatch =
            activeCostFilter === null
              ? true
              : conference.cost <= activeCostFilter;

          // Weather filter
          if (activeWeatherFilter === null) {
            weatherMatch = true;
          } else if (
            activeWeatherFilter === "cold" &&
            conference.temperature.celsius < 10
          ) {
            weatherMatch = true;
          } else if (
            activeWeatherFilter === "mild" &&
            (conference.temperature.celsius >= 10 &&
              conference.temperature.celsius < 20)
          ) {
            weatherMatch = true;
          } else if (
            activeWeatherFilter === "warm" &&
            conference.temperature.celsius >= 20
          ) {
            weatherMatch = true;
          }

          // Continent filter
          if (activeContinentFilter === null) {
            continentMatch = true;
          } else if (
            activeContinentFilter === "Americas" &&
            ["North America", "South America"].indexOf(
              conference.location.continent
            ) > -1
          ) {
            continentMatch = true;
          } else if (
            activeContinentFilter === "Europe" &&
            conference.location.continent === "Europe"
          ) {
            continentMatch = true;
          } else if (
            activeContinentFilter === "Asia / Australia" &&
            ["Asia", "Australia"].indexOf(conference.location.continent) > -1
          ) {
            continentMatch = true;
          }

          // Weekend filter
          const confEndDate = new Date(conference.date.end);
          const confStartDay = confStartDate.getDay();
          const confEndDay = confEndDate.getDay();

          // Sunday is 0, Monday is 1 etc.
          if (
            activeWeekendFilter === false &&
            ([0, 1, 5, 6].includes(confStartDay) ||
              [0, 1, 5, 6].includes(confEndDay))
          ) {
            touchesWeekendMatch = false;
          }

          if (
            activeWeekendFilter === true &&
            !(
              [0, 1, 5, 6].includes(confStartDay) ||
              [0, 1, 5, 6].includes(confEndDay)
            )
          ) {
            touchesWeekendMatch = false;
          }

          // Hide conferences with start day older than today
          if (confStartDate < new Date()) {
            show = false;
          }

          // Flag to enable hiding some conferences (e.g. cancelled or postponed)
          if (conference.hasOwnProperty("display")) {
            display = conference.display;
          }

          return (
            monthMatch &&
            costMatch &&
            weatherMatch &&
            continentMatch &&
            touchesWeekendMatch &&
            show &&
            display &&
            !conference.sponsored
          );
        });

        return _.orderBy(filteredConferences, "date.start");
      }
    },
    mutations: {
      UPDATE_COST_FILTER: (state, cost) => {
        state.filters.cost = state.filters.cost === cost ? null : cost;
      },
      UPDATE_MONTH_FILTER: (state, payload) => {
        const index = _.findIndex(state.filters.months, payload);

        index > -1
          ? state.filters.months.splice(index, 1)
          : state.filters.months.push(payload);
      },
      UPDATE_WEATHER_FILTER: (state, weather) => {
        state.filters.weather =
          state.filters.weather === weather
            ? null
            : (state.filters.weather = weather);
      },
      UPDATE_CONTINENT_FILTER: (state, continent) => {
        state.filters.continent =
          state.filters.continent === continent ? null : continent;
      },
      UPDATE_WEEKEND_FILTER: (state, touchesWeekend) => {
        state.filters.touchesWeekend =
          state.filters.touchesWeekend === touchesWeekend
            ? null
            : touchesWeekend;
      },
      CLEAR_ALL_FILTERS: state => {
        state.filters.cost = null;
        state.filters.months = [];
        state.filters.weather = null;
        state.filters.continent = null;
        state.filters.touchesWeekend = null;
      }
    },
    actions: {}
  });
};

export default createStore;
