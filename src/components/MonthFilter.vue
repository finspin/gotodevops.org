<template>
  <div id="month-filters">
    <div class="row month-filter">
      <div class="col-12">
          <span class="year">2018</span>
      </div>
      <div class="col-12">
        <div class="row no-gutters">
          <div v-for="month in months" class="col-1">
            <div @click="applyMonthFilter(month, '2018')"
                 :class="['month', { active: isActive(month, '2018') }]"
            >{{ month }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row month-filter">
      <div class="col-12">
        <span class="year">2019</span>
      </div>
      <div class="col-12">
        <div class="row no-gutters">
          <div v-for="month in months" class="col-1">
            <div @click="applyMonthFilter(month, '2019')"
                 :class="['month', { active: isActive(month, '2019') }]"
            >{{ month }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "MonthFilter",
    computed: {
      ...mapState([
        'filters'
      ])
    },
    methods: {
      ...mapMutations([
        'UPDATE_MONTH_FILTER'
      ]),
      applyMonthFilter: function (month, year) {
        const payload = { month: month, year: year };
        this.UPDATE_MONTH_FILTER(payload)
      },
      isActive: function (month, year) {
        return _.findIndex(this.filters.months, { month: month, year: year}) > -1;
      }
    },
    data() {
      return {
        months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      }
    }
  }
</script>

<style scoped>
  .month-filter {
    padding-bottom: 30px;
  }

  .month {
    border: 1px solid #e3e3e3;
    font-size: .7rem;
    border-right: none;
    padding: 5px 0;
    color: #111;
    background-color: #f1f1f1;
    cursor: pointer;
    text-align: center;
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

  .month.active {
    background-color: #ef4150;
    color: #fff;
  }

  .year {
    font-size: 13px;
  }
</style>
