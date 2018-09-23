<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-6 no-padding">
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
  import 'bootstrap';
  import Conferences from './components/Conferences'
  import Filters from './components/Filters'
  import Navigation from './components/Navigation'

  export default {
    name: 'App',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Conferences,
      Filters,
      Navigation
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
