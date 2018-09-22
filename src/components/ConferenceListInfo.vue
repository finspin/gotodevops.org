<template>
  <div id="conference-list-info" class="container">
    <div class="row">
      <div class="col-12" v-if="numberOfDisplayedConferences > 0 && numberOfDisplayedConferences < numberOfConferences">
        Showing {{ numberOfDisplayedConferences }} out of {{ numberOfConferences }} conferences. <span class="link-style" @click="clearAllFilters()">Clear all filters</span>
      </div>
      <div class="col-12" v-if="numberOfDisplayedConferences === 0">
        <p>There are no conferences to display. Try removing some filters or <span class="link-style" @click="clearAllFilters()">clear all filters</span>.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "ConferenceListInfo",
    computed: {
      ...mapGetters([
        'numberOfConferences',
        'numberOfDisplayedConferences'
      ])
    },
    methods: {
      ...mapMutations([
        'CLEAR_ALL_FILTERS'
      ]),
      clearAllFilters: function () {
        this.CLEAR_ALL_FILTERS();
      }
    }
  }
</script>

<style scoped>
  #conference-list-info {
    text-align: center;
    padding-top: 15px;
    font-size: 13px;
    color: grey;
  }

  .link-style {
    cursor: pointer;
    color: #ff2f3f;
    text-decoration: underline;
  }
</style>
