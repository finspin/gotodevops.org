<template>
  <div id="month-filters">
    <div class="row month-filter">
      <div class="col-12">
        <div class="filter-label">Year {{ currentYear() }}</div>
      </div>
      <div class="col-12">
        <div class="row no-gutters">
          <div v-for="month in months" class="col-1" :key="month">
            <div
              @click="applyMonthFilter(month, currentYear())"
              :class="['month', { active: isActive(month, currentYear()) }, { pastMonth: !isMonthActive(month, currentYear()) }]"
            >{{ month }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "MonthFilter",
  computed: {
    ...mapState(["filters"])
  },
  methods: {
    currentYear() {
      return new Date().getFullYear().toString()
    },
    ...mapMutations(["UPDATE_MONTH_FILTER"]),
    applyMonthFilter: function(month, year) {
      const payload = { month: month, year: year };
      this.UPDATE_MONTH_FILTER(payload);
    },
    isActive: function(month, year) {
      return (
        _.findIndex(this.filters.months, { month: month, year: year }) > -1
      );
    },
    isMonthActive: function(month, year) {
      const now = new Date();
      const currentMonth = now.getMonth();

      return this.months.indexOf(month) >= currentMonth;
    }
  },
  data() {
    return {
      months: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ]
    };
  }
};
</script>

<style scoped>
.month-filter {
  padding-bottom: 25px;
}

.month-filter.first {
  padding-bottom: 0;
}

.month {
  border: 1px solid #d4dde9;
  font-size: 12px;
  font-weight: 500;
  border-right: none;
  padding: 10px 0;
  color: #545e6d;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}

.pastMonth {
  pointer-events: none;
  color: #bbb;
  cursor: not-allowed;
}

.col-1:first-of-type .month {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.col-1:last-of-type .month {
  border-right: 1px solid #e3e3e3;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.month:hover {
  background-color: #eceef0;
}

.month.active {
  background-color: #ffa630;
  color: #fff;
}

.filter-label {
  font-size: 15px;
  color: #13273e;
  margin-bottom: 5px;
}

@media (max-width: 576px) {
  .month {
    padding: 5px 0;
    font-weight: 400;
    font-size: 11px;
  }
}
</style>
