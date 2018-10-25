<template>
  <div class="d-inline-block">
    <a class="info" href="/" data-toggle="modal" data-target="#filterInfoModal">
      <i class="fas fa-info-circle fa-2x"></i>
    </a>
    <div class="modal fade" id="filterInfoModal" tabindex="-1" role="dialog" aria-labelledby="filterInfoModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="filterInfoModalLabel">Filter Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col" class="text-center" style="width: 33.33%"><i class="fas fa-dollar-sign"></i></th>
                <th scope="col" class="text-center" style="width: 33.33%"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></th>
                <th scope="col" class="text-center" style="width: 33.33%"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i
                  class="fas fa-dollar-sign"></i></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-center">less than $300 / day</td>
                <td class="text-center">less than $600 / day</td>
                <td class="text-center">more than $600 / day</td>
              </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col" class="text-center" style="width: 33.33%"><i class="far fa-snowflake"></i></th>
                <th scope="col" class="text-center" style="width: 33.33%"><i class="fas fa-cloud"></i></th>
                <th scope="col" class="text-center" style="width: 33.33%"><i class="fas fa-umbrella-beach"></i></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-center">less than  10℃ (50ºF)</td>
                <td class="text-center">10℃ - 20℃ (50ºF - 68ºF)</td>
                <td class="text-center">more than 20℃ (68ºF)</td>
              </tr>
              </tbody>
            </table>
            <!--<i class="fas fa-dollar-sign"></i>: < $300 / day <br>-->
            <!--<i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>: < $600 / day <br>-->
            <!--<i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>: >-->
            <!--$600 / day-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FilterInfoModal'
  }
</script>

<style scoped>
  .info {
    color: #666;
    margin-left: 7px;
    position: relative;
    top: 7px;
  }

  table {
    font-size: 13px;
  }

  table th {
    background-color: #f2f2f2;
  }

  .table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 1px;
  }
</style>
