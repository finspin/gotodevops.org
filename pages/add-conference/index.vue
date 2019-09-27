<template>
  <div id="app">
    <div id="top-stripe"></div>
    <top-navigation></top-navigation>
    <div class="hero-image">
      <div class="container-fluid content">
        <div class="row">
          <div class="col-sm-10 offset-sm-1">
            <h2 class="text-center">Add new conference</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <form action="https://formspree.io/hello@gotodevops.org" method="POST">
              <div class="form-group">
                <label for="conferenceUrl">Conference URL *</label>
                <input
                  name="conferenceUrl"
                  type="url"
                  class="form-control"
                  id="conferenceUrl"
                  placeholder
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input name="email" type="email" class="form-control" id="email" placeholder />
              </div>
              <div class="form-group row">
                <div class="col-sm-6 offset-sm-3">
                  <button class="btn btn-primary btn-full" type="submit">SUBMIT</button>
                </div>
              </div>
            </form>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8 offset-sm-2 text-center mb-4">
            <img class="github-logo" width="24" src="~/assets/github-logo.png" />
            <span class="pr-info">
              <a
                href="https://github.com/finspin/gotodevops.org#how-can-i-contribute"
              >Or submit a pull request</a>!
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavigation from "../../components/TopNavigation";

export default {
  components: {
    TopNavigation
  }
};
</script>

<style>
.content {
  max-width: 767px;
  padding-top: 60px;
}

/* .hero-image {
  background-image: url("~assets/conference1.jpg");
  background-size: cover;
  min-height: 500px;
} */

h2 {
  font-size: 34px;
  margin-bottom: 30px;
  /* color: #fff; */
  font-weight: 600;
}

h3 {
  font-size: 25px;
  color: #666;
}

form {
  padding: 30px;
  margin-bottom: 60px;
  background-color: #eff8ff;
  border-color: #f4f4f4;
  border-radius: 10px;
}

.btn-full {
  margin-top: 15px;
  width: 100%;
  background-color: #ffa630;
  border: 1px solid #ffa630;
}

.btn-full:hover {
  background-color: #ffa630;
  border: 1px solid #ffa630;
}

.github-logo {
  opacity: 0.8;
  padding-right: 3px;
}

.pr-info {
  color: #666;
  font-size: 14px;
}
</style>
