<template>
  <div class="row weekend-filter">
    <div class="col-12">
      <div class="filter-label">Touches weekend
        <font-awesome-icon :icon="['fas', 'info-circle']" id="weekend-filter-info-circle" class="ml-1" :style="{ color: '#666' }" />
            <b-tooltip target="weekend-filter-info-circle" triggers="hover" placement="right">A conference touches weekend if its start or end day falls on Friday, Saturday, Sunday or Monday.
            </b-tooltip>
      </div>
      <div class="row">
        <div class="col-4 pr-2 pr-sm-3">
          <div
            @click="applyWeekendFilter(true)"
            :class="['touches-weekend', { active: isActive(true) }]"
          >YES</div>
        </div>
        <div class="col-4 pr-2 pl-2 pr-sm-3 pl-sm-3">
          <div @click="applyWeekendFilter(false)" :class="['touches-weekend', { active: isActive(false)} ]">NO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "WeekendFilter",
  computed: {
    ...mapState(["filters"])
  },
  methods: {
    ...mapMutations(["UPDATE_WEEKEND_FILTER"]),
    applyWeekendFilter: function(touchesWeekend) {
      this.UPDATE_WEEKEND_FILTER(touchesWeekend);
    },
    isActive: function(touchesWeekend) {
      return this.filters.touchesWeekend === touchesWeekend;
    }
  }
};
</script>

<style scoped>
.weekend-filter {
  padding-bottom: 25px;
}

.touches-weekend {
  border: 1px solid #d4dde9;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  padding: 9px 0;
  color: #545e6d;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}

.touches-weekend:hover {
  background-color: #eceef0;
}

.touches-weekend.active {
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
  .touches-weekend {
    padding: 5px 0;
    font-weight: 400;
  }
}
</style>
