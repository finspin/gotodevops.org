<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">
          <img src="/static/gotodevops-logo.png" alt="Go To DevOps logo" width="30" height="30">
        <h1 class="d-inline-block">
          <span class="site-title">GoToDevOps</span>
        </h1>
      </a>
      <h2 class="d-none d-md-block">
        community maintained list of DevOps conferences
      </h2>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/finspin/gotodevops.org#how-can-i-contribute"><i class="fas fa-plus"></i> ADD CONFERENCE</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  nav {
    background-color: #fff;
    border-bottom: 1px solid #ececec;
  }

  .navbar-light .navbar-toggler {
    border: none;
  }

  .navbar button {
    padding-right: 0 !important;
  }

  h1 {
    font-size: 20px;
    color: #333;
    font-weight: 500;
  }

  h2 {
    font-size: 13px;
    color: #666;
    font-weight: 400;
    position: relative;
    top: 6px;
  }

  .site-title {
    position: relative;
    top: 2px;
    padding-left: 6px;
  }

  ul {
    font-size: 13px;
  }

  ul a {
    color: #999;
  }

  .navbar-toggler-icon {
    color: #999;
  }

  @media (min-width: 768px) {
    nav {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767px) {
    .no-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }

  /*@media (min-width: 1200px) {*/
    /*h1 {*/
      /*padding-left: 15px;*/
    /*}*/
  /*}*/

</style>
