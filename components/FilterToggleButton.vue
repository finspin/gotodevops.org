<template>
  <div class="d-inline-block">
    <b-btn class="btn btn-filter btn-link pr-0" v-b-toggle="'collapse-filters'">
      <font-awesome-icon icon="filter" class="mr-1" />FILTER
    </b-btn>
  </div>
</template>

<script>
export default {
  name: "FilterToggle"
};
</script>

<style scoped>
.btn-filter {
  font-size: 13px;
  font-weight: 500;
  color: #ffa630;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

/*b-btn assigns btn-secondary class by default*/
.btn-secondary {
  background-color: #fff;
  border: none;
}
</style>
