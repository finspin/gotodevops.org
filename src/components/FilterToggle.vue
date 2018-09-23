<template>
  <div class="container d-md-none filter-toggle">
    <div class="row">
      <div class="col-12 float-right">
        <div class="buttons float-right">
          <a class="btn btn-primary btn-sm btn-filter" href="/" role="button"><i
            class="fas fa-envelope"></i>&nbsp; SUBSCRIBE</a>
          <button class="btn btn-filter btn-sm" type="button" data-toggle="collapse"
                  data-target="#collapse-filters"
                  aria-expanded="false" aria-controls="collapse-filters">
            <i class="fas fa-filter"></i> FILTERS
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "FilterToggle",
  }
</script>

<style scoped>
  .filter-toggle {
    padding-top: 15px;
  }

  .btn-filter {
    background-color: #ff2f3f;
    color: #fff;
    border: 1px solid #ff2f3f;
    margin-left: 7px;
  }
</style>
