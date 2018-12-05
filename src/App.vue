<template>
  <div id="app">
    <div id="top-stripe"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 left no-padding">
          <div class="left-content">
            <div class="col-md-12">
              <h1>DevOps Conferences 2019</h1>
              <filters></filters>
            </div>
          </div>
        </div>
        <div class="col-md-6 no-padding right scroll-element">
          <div class="right-content">
            <div class="col-md-12 no-padding">
              <filter-info-row></filter-info-row>
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
  import Conferences from './components/Conferences'
  import ConferenceListInfo from './components/ConferenceListInfo'
  import Filters from './components/Filters'
  import Navigation from './components/Navigation'
  import FilterInfoRow from './components/FilterInfoRow'
  import PromoBox from './components/PromoBox'
  import * as Sentry from '@sentry/browser'

  Sentry.init({dsn: 'https://7f9b876b596b45319aa2b59093ccef19@sentry.io/1310125'});

  export default {
    name: 'DevopsConferences',
    components: {
      Conferences,
      ConferenceListInfo,
      Filters,
      Navigation,
      FilterInfoRow,
      PromoBox
    }

  }
</script>

<style>
  body {
    font-family: Roboto, sans-serif;
    color: #132839;
  }

  #top-stripe {
    width: 100%;
    height: 6px;
    background: #6542CB;
  }

  .left {
    background-color: #EFF8FF;
    padding-right: 40px;
  }

  .left-content {
    max-width: 550px;
    float: right;
    width: 100%;
  }

  .right {
    background-color: #fff;
    padding-left: 25px;
  }

  .right-content {
    max-width: 550px;
    float: left;
    width: 100%;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .container {
    max-width: 600px;
  }


  @media (max-width: 576px) {
    h1 {
      font-size: 28px;
      text-align: center;
      padding-bottom: 10px;
    }
  }

  @media (max-width: 767px) {
    .no-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 768px) {
    .scroll-element {
      height: 100vh;
      overflow: hidden;
      overflow-y: scroll;
    }
  }

  .btn:focus, button:focus {
    box-shadow: none;
  }
</style>
