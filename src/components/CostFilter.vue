<template>
  <div class="row cost-filter">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <div @click="applyCostFilter(0)" :class="['cost', { active: isActive(0) }]">
            FREE
          </div>
        </div>
        <div class="col-4">
          <div @click="applyCostFilter(1)" :class="['cost', { active: isActive(1)} ]">
            <i class="fas fa-dollar-sign"></i>
          </div>
        </div>
        <div class="col-4">
          <div @click="applyCostFilter(2)" :class="['cost', { active: isActive(2) }]">
            <i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "CostFilter",
    computed: {
      ...mapState([
        'filters'
      ])
    },
    methods: {
      ...mapMutations([
        'UPDATE_COST_FILTER'
      ]),
      applyCostFilter: function (cost) {
        this.UPDATE_COST_FILTER(cost);
      },
      isActive: function (cost) {
        return this.filters.cost === cost;
      }
    }
  }
</script>

<style scoped>
  .cost-filter {
    padding-bottom: 30px;
  }

  .cost {
    border: 1px solid #e3e3e3;
    font-size: 13px;
    border-radius: 5px;
    padding: 7px 0;
    color: #111;
    background-color: #f1f1f1;
    cursor: pointer;
    text-align: center;
  }

  .cost.active {
    background-color: #ef4150;
    color: #fff;
  }
</style>
