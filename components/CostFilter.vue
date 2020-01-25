<template>
  <div class="row cost-filter">
    <div class="col-12">
      <div class="filter-label">Ticket Cost
            <font-awesome-icon :icon="['fas', 'info-circle']" id="cost-filter-info-circle" class="ml-1" :style="{ color: '#666' }" />
            <b-tooltip target="cost-filter-info-circle" triggers="hover" placement="right">All ticket prices are converted to USD based on a fixed conversion rate and include VAT. Check the conference website for the definite ticket prices.
            </b-tooltip>
      </div>

      <div class="row">
        <div class="col-4 pr-2 pr-sm-3">
          <div
            @click="applyCostFilter(0)"
            :class="['cost', 'cost-free', { active: isActive(0) }]"
          >FREE</div>
        </div>
        <div class="col-4 pr-2 pl-2 pr-sm-3 pl-sm-3">
          <div @click="applyCostFilter(1)" :class="['cost', { active: isActive(1)} ]">&lt; $300 / DAY</div>
        </div>
        <div class="col-4 pl-2 pl-sm-3">
          <div @click="applyCostFilter(2)" :class="['cost', { active: isActive(2) }]">&lt; $600 / DAY</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CostFilter",
  computed: {
    ...mapState(["filters"])
  },
  methods: {
    ...mapMutations(["UPDATE_COST_FILTER"]),
    applyCostFilter: function(cost) {
      this.UPDATE_COST_FILTER(cost);
    },
    isActive: function(cost) {
      return this.filters.cost === cost;
    }
  }
};
</script>

<style scoped>
.cost-filter {
  padding-bottom: 25px;
}

.cost {
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

.cost-free {
  font-size: 13px;
}

.cost:hover {
  background-color: #eceef0;
}

.cost.active {
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
  .cost {
    padding: 5px 0;
    font-weight: 400;
  }
}
</style>
