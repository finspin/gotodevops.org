<template>
  <div id="app">
    <navigation></navigation>
    <promo-box></promo-box>
    <div class="container">
      <div class="row">
        <div class="col-md-6 no-padding">
          <filter-info-row></filter-info-row>
          <filters></filters>
        </div>
        <div class="col-md-6 no-padding scroll-element">
          <conferences></conferences>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Conferences from './components/Conferences'
  import Filters from './components/Filters'
  import Navigation from './components/Navigation'
  import FilterInfoRow from './components/FilterInfoRow'
  import PromoBox from './components/PromoBox'
  import * as Sentry from '@sentry/browser'

  Sentry.init({ dsn: 'https://7f9b876b596b45319aa2b59093ccef19@sentry.io/1310125' });

  export default {
    name: 'DevopsConferences',
    components: {
      Conferences,
      Filters,
      Navigation,
      FilterInfoRow,
      PromoBox
    }

  }
</script>

<style>
  @media (max-width: 1200px) {
    .container {
      max-width: 100%;
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
      border-left: 1px solid #ececec;
    }
  }

  .btn:focus, button:focus {
    box-shadow: none;
  }
</style>
