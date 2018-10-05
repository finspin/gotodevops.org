<template>
  <div class="d-inline-block">
    <button class="btn btn-filter btn-sm" type="button" data-toggle="collapse"
            data-target="#collapse-filters"
            aria-expanded="false" aria-controls="collapse-filters">
      <i class="fas fa-filter"></i> FILTERS
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
    background-color: #ff2f3f;
    color: #fff;
    border: 1px solid #ff2f3f;
    margin-left: 7px;
  }
</style>
