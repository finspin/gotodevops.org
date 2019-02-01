<template>
  <div>
    This will be devops days page
  </div>
</template>

<script>
  export default {
    name: "DevopsDays",
  }
</script>

<style>
  body {
    font-family: Roboto, sans-serif;
    color: #132839;
  }

  .no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  #top-stripe {
    width: 100%;
    height: 6px;
    background: #6542CB;
  }

  .left {
    background-color: #EFF8FF;
    padding-left: 40px;
    padding-right: 40px;
  }

  .left-content {
    max-width: 500px;
    float: right;
    width: 100%;
  }

  .right {
    background-color: #fff;
    padding-left: 25px;
    padding-right: 40px;
  }

  .right-content {
    max-width: 530px;
    float: left;
    width: 100%;
  }

  h1 {
    font-size: 32px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 24px;
      text-align: center;
      padding-bottom: 10px;
    }
  }

  @media (max-width: 767px) {
    .left {
      padding-left: 15px;
      padding-right: 15px;
    }

    .right {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 768px) {
    .right {
      height: 100vh;
      /*overflow: hidden;*/
      overflow-y: scroll;
    }
  }
</style>
