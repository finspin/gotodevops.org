<template>
  <div id="app">
    <div id="top-stripe"></div>
    <top-navigation></top-navigation>
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">Advertise on GoTo DevOps</h2>
          <p class="advertising-slogan text-center mb-5">Reach over 25.000 DevOps professionals!</p>
        </div>
      </div>
      <div class="row advertising">
        <div class="col-sm-6">
          <div class="advertising-option">
            <h3 class="text-center">Promote conference</h3>
            <ul>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />Conference stickied at the top
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />Conference background highlighted
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />3500 views / month
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                /><strike>2 spots available</strike> sold out until March 2020!
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />BONUS: Promotion in monthly newsletter
              </li>
            </ul>
            <div class="advertising-price text-center mb-4">
              <span class="monthly-price">
                <span class="advertising-option-sum">$197</span> / month
              </span>
            </div>
            <div class="advertising-contact text-center">Contact hello@gotodevops.org to start promoting your conference!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="advertising-option">
            <h3 class="text-center">Promote product</h3>
            <ul>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />Product placement at the top of the page
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />Only DevOps related products
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />3500 views / month
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />Only 1 spot available
              </li>
              <li>
                <font-awesome-icon
                  icon="check-circle"
                  class="mr-3 check-icon"
                />BONUS: Promotion in monthly newsletter
              </li>
            </ul>
            <div class="advertising-price text-center mb-4">
              <span class="monthly-price">
                <span class="advertising-option-sum">$197</span> / month
              </span>
            </div>
            <div class="advertising-contact text-center">Contact hello@gotodevops.org to start promoting your product!</div>
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
.container-fluid {
  max-width: 992px;
}

.advertising {
  margin-bottom: 50px;
}

h2 {
  font-size: 34px;
  margin-top: 60px;
  margin-bottom: 15px;
  font-weight: 600;
}

h3 {
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 25px;
  font-weight: 600;
  color: #444;
}

p.advertising-slogan {
  font-size: 19px;
  color: #666;
}

.advertising-option {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: 1px solid #eeeeee;
  padding: 15px 30px;
  -webkit-box-shadow: 6px 6px 7px 0px #bdbcbc;
  -moz-box-shadow: 4px 4px 5px 0px #bdbcbc;
  box-shadow: 6px 6px 7px 0px #d8d8d8;
  margin-bottom: 30px;
}

.advertising-option ul {
  list-style: none;
  padding-left: 0;
  border-bottom: 1px solid #eeeeee;
}

.advertising-option ul li {
  font-size: 19px;
  color: #555;
  margin-bottom: 20px;
}

.advertising-option-sum {
  font-size: 35px;
}

.advertising-contact {
  font-size: 15px;
  color: #999;
}

.check-icon {
  color: #fb4d33;
}
</style>
