<template>
  <div>
    <div id="top-stripe"></div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="/"
        >
          <img
            src="~assets/logo.png"
            width="34"
            class="mr-2"
            alt="GoTo DevOps logo"
          />
          GoTo DevOps
          <h1>DevOps Conferences {{ new Date().getFullYear() }}</h1>
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/promote">
              Advertise
              <sup>new</sup>
            </b-nav-item>
            <b-nav-item href="/add-conference">Add conference</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNavigation"
};
</script>

<style scoped>
#top-stripe {
  width: 100%;
  height: 6px;
  background: #ffa630;
}

.container-fluid {
  max-width: 1115px;
}

.navbar {
  background-color: #fff !important;
  border-bottom: 1px solid #e6e6e6;
  padding-top: 3px !important;
  padding-bottom: 3px !important;
}

.brand-title {
  color: #333;
}

.brand-title:hover {
  text-decoration: none;
}

.nav-item {
  font-size: 14px;
}

.nav-link {
  color: #333 !important;
  margin-left: 10px;
}

.nav-link:hover {
  color: #999 !important;
}

.nav-item sup {
  color: rgb(231, 55, 55);
}

.navbar-brand {
  font-weight: 700;
}

h1 {
  font-size: 13px;
  color: #666;
  padding-left: 50px;
  margin-top: -5px;
  margin-bottom: 0;
}
</style>
