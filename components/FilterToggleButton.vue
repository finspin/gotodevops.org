<template>
  <div class="d-inline-block">
    <button class="btn btn-filter btn-link pr-0" v-b-toggle="'collapse-filters'" type="button">
      <font-awesome-icon icon="filter" class="mr-1"/>
      FILTER
    </button>
  </div>
</template>

<script>

  export default {
    name: "FilterToggle",
  }
</script>

<style scoped>
  .btn-filter {
    font-size: 14px;
    font-weight: 600;
    color: #6542CB;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
</style>
