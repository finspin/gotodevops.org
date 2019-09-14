<template>
  <div id="conference-list-info" class="container">
    <div class="row">
      <div class="col-12 list-info">
        <span
          v-show="numberOfDisplayedConferences === numberOfConferences"
        >Displaying all {{ numberOfConferences }} conferences. Try some filters.</span>
        <span
          v-show="numberOfDisplayedConferences > 0 && numberOfDisplayedConferences < numberOfConferences"
        >
          Displaying {{ numberOfDisplayedConferences }} out of {{ numberOfConferences }} conferences.
          <span
            class="link-style"
            @click="clearAllFilters()"
          >Clear all filters</span>.
        </span>
        <span v-show="numberOfDisplayedConferences === 0">
          <span>
            There are no conferences to display. Try removing some filters or
            <span
              class="link-style"
              @click="clearAllFilters()"
            >clear all filters</span>.
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ConferenceListInfo",
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
.list-info {
  text-align: right;
  font-size: 13px;
  color: #627690;
  padding-top: 30px;
  padding-bottom: 15px;
}

.link-style {
  cursor: pointer;
  color: #666;
  text-decoration: underline;
}

@media (max-width: 576px) {
  .list-info {
    text-align: center;
    padding-top: 5px;
  }
}
</style>
