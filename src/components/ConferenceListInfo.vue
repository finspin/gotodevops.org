<template>
  <div id="conference-list-info" class="container">
    <div class="row">
      <div class="col-12 list-info">
        <span v-if="numberOfDisplayedConferences === numberOfConferences">
        Showing all {{ numberOfConferences }} conferences. Try some filters above.
        </span>
        <span v-if="numberOfDisplayedConferences > 0 && numberOfDisplayedConferences < numberOfConferences">
          Showing {{ numberOfDisplayedConferences }} out of {{ numberOfConferences }} conferences. <span
          class="link-style" @click="clearAllFilters()">Clear all filters</span>
      </span>
        <span v-if="numberOfDisplayedConferences === 0">
          <p>There are no conferences to display. Try removing some filters or <span class="link-style"
                                                                                     @click="clearAllFilters()">clear all filters</span>.</p>
        </span>
        <!--<div class="col-12 list-info" v-if="numberOfDisplayedConferences === numberOfConferences">-->
        <!--Showing all {{ numberOfConferences }} conferences. Try some filters above.-->
        <!--</div>-->
        <!--<div class="col-12 list-info" v-if="numberOfDisplayedConferences > 0 && numberOfDisplayedConferences < numberOfConferences">-->
        <!--Showing {{ numberOfDisplayedConferences }} out of {{ numberOfConferences }} conferences. <span class="link-style" @click="clearAllFilters()">Clear all filters</span>-->
        <!--</div>-->
        <!--<div class="col-12 list-info" v-if="numberOfDisplayedConferences === 0">-->
        <!--<p>There are no conferences to display. Try removing some filters or <span class="link-style" @click="clearAllFilters()">clear all filters</span>.</p>-->
        <!--</div>-->
        <!--<div class="d-inline-block">-->
        <!--<a class="info" href="/" data-toggle="modal" data-target="#infoModal">-->
        <!--<i class="fas fa-info-circle fa-2x"></i>-->
        <!--</a>-->
        <!--</div>-->
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!--<div class="d-none d-md-block">-->
          <info-modal></info-modal>
          <!--<a class="info" href="/" data-toggle="modal" data-target="#infoModal">-->
            <!--<i class="fas fa-info-circle fa-2x"></i>-->
          <!--</a>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import InfoModal from './InfoModal'

  export default {
    name: "ConferenceListInfo",
    components: {
      InfoModal
    },
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
    font-size: 13px;
    color: grey;
    border-bottom: 1px solid #ececec;
    padding-bottom: 15px;
  }

  .link-style {
    cursor: pointer;
    color: #ff2f3f;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    #conference-list-info {
      border-bottom: none;
    }
  }
</style>
