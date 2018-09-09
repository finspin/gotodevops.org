<template>
  <div class="row month-filter">
    <div class="col-12">
      <div class="row no-gutters">
        <div v-for="month in months" class="col-1">
          <div @click="applyMonthFilter(month)"
               :class="['month', { active: isActive(month) }]"
          >{{ month }}
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
      applyMonthFilter: function (month) {
        this.UPDATE_MONTH_FILTER(month)
      },
      isActive: function (month) {
        return this.filters.months.indexOf(month) > -1;
      }
    },
    data() {
      return {
        months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
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
    background-color: #e6616d;
    color: #fff;
  }
</style>
