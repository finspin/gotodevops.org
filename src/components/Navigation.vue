<template>
  <nav class="navbar navbar-light bg-none">
    <a class="navbar-brand mx-auto" href="#">
      <h1>DevOps Conferences 2018 - 2019</h1>
    </a>
  </nav>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  nav {
    background-color: #e6616d;
    border-bottom: 1px solid #e65b69;
  }

  h1 {
    font-size: 23px;
    color: #fdeaea;
  }
  @media (min-width: 768px) {
    nav {
      margin-bottom: 30px;
    }
  }
</style>
