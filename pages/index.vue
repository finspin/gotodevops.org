<template>
  <div id="app">
    <div id="top-stripe"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 left no-gutters">
          <div class="left-content">
            <h1>DevOps Conferences 2019 / 2020</h1>
            <div class="d-none d-md-block">
              <filters></filters>
              <subscription-form></subscription-form>
            </div>
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
              <conference-list-info></conference-list-info>
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

export default {
  name: "DevopsConferences",
  components: {
    Conferences,
    ConferenceListInfo,
    Filters,
    FilterInfoRow,
    SubscriptionForm
  }
};
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  color: #132839;
}

.no-padding {
  padding-left: 0;
  padding-right: 0;
}

#top-stripe {
  width: 100%;
  height: 6px;
  background: #ffa630;
}

.left {
  background-color: #eff8ff;
  padding-left: 40px;
  padding-right: 40px;
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

h1 {
  font-size: 32px;
  padding-top: 30px;
  padding-bottom: 30px;
}

@media (max-width: 576px) {
  h1 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 10px;
  }
}

@media (max-width: 767px) {
  .left {
    padding-left: 15px;
    padding-right: 15px;
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
