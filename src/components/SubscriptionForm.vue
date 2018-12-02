<template>
  <div class="row cost-filter">
    <div class="col-12 mt-5">
        <h2>Get notified of new DevOps conferences!</h2>
      <form class="form-inline mb-4">
        <input class="form-control col-7 offset-1" id="email" name="email" type="text" placeholder="Enter your email"/>
        <button type="submit" class="btn col-3">SUBSCRIBE</button>
      </form>
      <div class="col-10 offset-1">
        <p class="info">Add conference by <a href="https://github.com/finspin/gotodevops.org#how-can-i-contribute">submitting a pull request</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubscriptionForm",
  }
</script>

<style scoped>
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #13273E;
    text-align: center;
  }

  input#email {
    border-radius: 5px 0 0 5px;
    -moz-border-radius: 5px 0 0 5px;
    -webkit-border-radius: 5px 0 0 5px;
    border-right: none;
    font-size: 15px;
  }

  button {
    border-radius: 0 5px 5px 0;
    -moz-border-radius: 0 5px 5px 0;
    -webkit-border-radius: 0 5px 5px 0;
    border-left: none;
    color: #fff;
    background-color: #6542CB;
    border-color: #6542CB;
    font-size: 15px;
    padding-top: 8px;
  }

  button:hover, button:active {
    background-color: #6542CB;
    border-color: #6542CB;
  }

  .info {
    text-align: center;
    font-size: 13px;
    color: #909090;
  }

  .info a {
    color: #5F2BF9;
    text-decoration: underline;
  }
</style>
