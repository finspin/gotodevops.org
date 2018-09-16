<template>
  <div class="row continent-filter">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <div @click="applyContinentFilter('USA')" :class="['continent', { active: isActive('USA') }]">
            USA
          </div>
        </div>
        <div class="col-4">
          <div @click="applyContinentFilter('Europe')" :class="['continent', { active: isActive('Europe')} ]">
            Europe
          </div>
        </div>
        <div class="col-4">
          <div @click="applyContinentFilter('Asia / Australia')" :class="['continent', { active: isActive('Asia / Australia') }]">
            Asia / Austr.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "ContinentFilter",
    computed: {
      ...mapState([
        'filters'
      ])
    },
    methods: {
      ...mapMutations([
        'UPDATE_CONTINENT_FILTER'
      ]),
      applyContinentFilter: function (continent) {
        this.UPDATE_CONTINENT_FILTER(continent);
      },
      isActive: function (continent) {
        return this.filters.continent === continent;
      }
    }
  }
</script>

<style scoped>
  .continent-filter {
    padding-bottom: 30px;
  }

  .continent {
    border: 1px solid #e3e3e3;
    font-size: 13px;
    border-radius: 5px;
    padding: 7px 0;
    color: #111;
    background-color: #f1f1f1;
    cursor: pointer;
    text-align: center;
  }

  .continent.active {
    background-color: #ef4150;
    color: #fff;
  }
</style>
