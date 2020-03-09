<template>
  <div id="app">
    <top-navigation></top-navigation>
    <premium-ad-spot></premium-ad-spot>
    <div class="container-fluid content">
      <div class="row">
        <div class="col-md-6 left no-gutters">
          <div class="left-content">
            <subscription-form></subscription-form>
            <div class="d-none d-md-block">
              <!-- <div class="row meta-filters">
                <clear-filters-button></clear-filters-button>
              </div> -->
              <filters></filters>
            </div>
          </div>
        </div>
        <div class="col-md-6 right no-gutters">
          <div class="right-content">
            <div class="col-md-12 no-padding">
              <div class="d-none d-md-block">
                <conference-list-info></conference-list-info>
              </div>
              <conferences></conferences>
            </div>
          </div>
        </div>
      </div>
    </div>
    <sticky-footer-stripe></sticky-footer-stripe>
  </div>
</template>

<script>
import Conferences from "../components/Conferences";
import ConferenceListInfo from "../components/ConferenceListInfo";
import Filters from "../components/Filters";
import SubscriptionForm from "../components/SubscriptionForm";
import TopNavigation from "../components/TopNavigation";
import ClearFiltersButton from "../components/ClearFiltersButton";
import PremiumAdSpot from "../components/PremiumAdSpot";
import StickyFooterStripe from "../components/StickyFooterStripe";

export default {
  components: {
    Conferences,
    ConferenceListInfo,
    Filters,
    SubscriptionForm,
    TopNavigation,
    ClearFiltersButton,
    PremiumAdSpot,
    StickyFooterStripe
  }
};
</script>

<style>
#app {
  padding-bottom: 30px;
}

.left {
  background-color: #eff8ff;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
}

.left-content {
  max-width: 500px;
  float: right;
  width: 100%;
}

.right {
  background-color: #fff;
  padding-left: 25px;
  padding-right: 40px;
}

.right-content {
  max-width: 530px;
  float: left;
  width: 100%;
}

@media (max-width: 767px) {
  .left {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0;
  }

  .right {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (min-width: 768px) {
  .right {
    height: 100vh;
    overflow-y: scroll;
  }
  .right-content {
    padding-top: 20px;
  }
}
</style>
