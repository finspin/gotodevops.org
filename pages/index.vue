<template>
  <div id="app">
    <top-navigation></top-navigation>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 left no-gutters">
          <div class="left-content">
            <div class="d-none d-md-block">
              <!-- <h1>DevOps Conferences 2019 / 2020</h1> -->
              <filters></filters>
            </div>
            <subscription-form></subscription-form>
          </div>
        </div>
        <div class="col-md-6 right no-gutters">
          <div class="right-content">
            <div class="col-md-12 no-padding">
              <filter-info-row></filter-info-row>
              <b-collapse id="collapse-filters">
                <div class="container">
                  <filters></filters>
                </div>
              </b-collapse>
              <conferences></conferences>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Conferences from "../components/Conferences";
import ConferenceListInfo from "../components/ConferenceListInfo";
import Filters from "../components/Filters";
import FilterInfoRow from "../components/FilterInfoRow";
import SubscriptionForm from "../components/SubscriptionForm";
import TopNavigation from "../components/TopNavigation";

export default {
  components: {
    Conferences,
    ConferenceListInfo,
    Filters,
    FilterInfoRow,
    SubscriptionForm,
    TopNavigation
  }
};
</script>

<style>
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
  padding-top: 20px;
}

h1 {
  font-size: 28px;
  padding-top: 20px;
  padding-bottom: 10px;
}
@media (max-width: 576px) {
  h1 {
    font-size: 21px;
    text-align: center;
    padding-bottom: 10px;
  }
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
    /*overflow: hidden;*/
    overflow-y: scroll;
  }
}
</style>
