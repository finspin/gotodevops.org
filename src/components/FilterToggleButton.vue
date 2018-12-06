<template>
  <div class="d-inline-block">
    <button class="btn btn-filter btn-link" type="button" data-toggle="collapse"
            data-target="#collapse-filters"
            aria-expanded="false" aria-controls="collapse-filters">
      <i class="fas fa-filter"></i> FILTERS
    </button>
    <!--<i class="fas fa-filter"></i> FILTERS-->

  </div>
</template>

<script>

  export default {
    name: "FilterToggle",
  }
</script>

<style scoped>
  /*.btn-filter {*/
    /*background-color: #fff;*/
    /*color: #ccc;*/
    /*border: 1px solid #fff;*/
    /*margin-left: 7px;*/
  /*}*/

  .btn-filter {
    /*border: 1px solid #D4DDE9;*/
    font-size: 13px;
    font-weight: 600;
    /*border-radius: 5px;*/
    /*padding: 9px;*/
    color: #627690;
    /*background-color: #fff;*/
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }

  .btn-filter i {
    font-size: 12px;
  }

</style>
