<template>
  <div class="row continent-filter">
    <div class="col-12">
      <div class="filter-label">Location</div>
      <div class="row">
        <div class="col-4 pr-2 pr-sm-3">
          <div
            @click="applyContinentFilter('Americas')"
            :class="['continent', { active: isActive('Americas') }]"
          >AMERICAS</div>
        </div>
        <div class="col-4 pr-2 pl-2 pr-sm-3 pl-sm-3">
          <div
            @click="applyContinentFilter('Europe')"
            :class="['continent', { active: isActive('Europe')} ]"
          >EUROPE</div>
        </div>
        <div class="col-4 pl-2 pl-sm-3">
          <div
            @click="applyContinentFilter('Asia / Australia')"
            :class="['continent', { active: isActive('Asia / Australia') }]"
          >ASIA / AUS</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContinentFilter",
  computed: {
    ...mapState(["filters"])
  },
  methods: {
    ...mapMutations(["UPDATE_CONTINENT_FILTER"]),
    applyContinentFilter: function(continent) {
      this.UPDATE_CONTINENT_FILTER(continent);
    },
    isActive: function(continent) {
      return this.filters.continent === continent;
    }
  }
};
</script>

<style scoped>
.continent-filter {
  padding-bottom: 25px;
}

.continent {
  border: 1px solid #d4dde9;
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px 0;
  color: #545e6d;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}

.continent:hover {
  background-color: #eceef0;
}

.continent.active {
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
  .continent {
    padding: 5px 0;
    font-weight: 400;
  }
}
</style>
