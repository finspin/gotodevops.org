<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container-fluid">
        <h1>DevOps Conferences 2019</h1>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/advertise">
              Advertise
              <sup>new</sup>
            </b-nav-item>
            <b-nav-item href="/about">About</b-nav-item>
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
.container-fluid {
  max-width: 1115px;
}

.navbar {
  background-color: #fff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin: 0;
}

.nav-item {
  font-size: 14px;
}

.nav-link {
  color: #333 !important;
  margin-left: 10px;
}

.nav-item sup {
  color: rgb(231, 55, 55);
}
</style>
