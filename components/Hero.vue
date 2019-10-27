<template>
  <div class="container-fluid hero">
    <div class="row">
      <!-- <div class="col-2 mt-4">
      <img src="~/assets/girl-yellow-hair.png" alt="Conferenc speaker" width="70" />
      </div>-->
      <div class="col-sm-7 mt-4">
        <img
          src="~/assets/girl-yellow-hair.png"
          alt="Conference speaker"
          width="70"
          class="float-left mr-4"
        />
        <subscription-form></subscription-form>
      </div>
      <div class="col-sm-4 offset-sm-1 mt-1 mt-sm-3 mb-3 float-sm-right">
        <a class="sponsored" href="/">
          <div class="hero-sponsored mt-2">
            The world's first insurance made for DevOps professionals. Get global travel medical from $37 / month!
            <div class="sponsored-info text-right">Sponsored</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SubscriptionForm from "../components/SubscriptionForm";

export default {
  name: "Hero",
  components: {
    SubscriptionForm
  }
};
</script>

<style scoped>
.container-fluid {
  max-width: 1115px;
}

.hero-sponsored {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  padding: 10px 15px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.sponsored-info {
  font-size: 11px;
  color: #ccc;
  font-weight: 400;
}

a.sponsored {
  display: block;
  /* background: rgb(247, 247, 247); */
}

a.sponsored:hover {
  text-decoration: none;
}
</style>
