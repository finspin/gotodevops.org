<template>
  <div class="col-12 text-right">
    <div class="d-inline-block">
      <b-btn
        class="btn btn-clear-filters"
        @click="clearAllFilters()"
        :disabled="numberOfDisplayedConferences === numberOfConferences"
      >
        <font-awesome-icon icon="times" class="mr-1" />Clear filters
      </b-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ClearFiltersButton",
  computed: {
    ...mapGetters(["numberOfConferences", "numberOfDisplayedConferences"])
  },
  methods: {
    ...mapMutations(["CLEAR_ALL_FILTERS"]),
    clearAllFilters: function() {
      this.CLEAR_ALL_FILTERS();
    }
  }
};
</script>

<style scoped>
.btn-clear-filters {
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  color: #fff;
  background-color: #ffa630;
  border-color: #ffa630;
  width: 100%;
  padding: 4px 8px !important;
}

.btn-clear-filters:disabled {
  background-color: #bdbdbd;
  border-color: #bdbdbd;
  cursor: not-allowed;
}
</style>
