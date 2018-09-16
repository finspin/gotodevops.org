<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <h1>gotoDevOps <i class="fas fa-angle-double-right"></i></h1>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/about">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add-conference">ADD CONFERENCE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/advertise">ADVERTISE</a>
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

  h1 {
    font-size: 21px;
    color: #333;
    font-weight: 600;
  }

  h1 i {
    color: #fd3244;
    font-size: 16px;
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

  @media (min-width: 1200px) {
    h1 {
      padding-left: 15px;
    }
  }
</style>
