<template>
  <div class="row cost-filter">
    <div class="col-12 mt-5">
      <h2>Get notified of new DevOps conferences!</h2>
      <form
        action="https://formspree.io/subscribe@gotodevops.org"
        method="POST"
        class="form-inline mb-4"
      >
        <input
          class="form-control col-7 offset-1"
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        <button type="submit" class="btn col-3">SUBSCRIBE</button>
      </form>
      <div class="col-10 offset-1">
        <p class="info">
          Add conference by filling
          <a href="https://forms.gle/1AJtAZMJxSwgAHJPA">this form</a> or by
          <a
            href="https://github.com/finspin/gotodevops.org#how-can-i-contribute"
          >submitting a pull request</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionForm"
};
</script>

<style scoped>
h2 {
  font-size: 18px;
  font-weight: 400;
  color: #13273e;
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
  background-color: #ffa630;
  border-color: #ffa630;
  font-size: 15px;
  padding-top: 8px;
}

button:hover,
button:active {
  background-color: #ffae35;
  border-color: #ffae35;
  color: #fff;
}

.info {
  text-align: center;
  font-size: 13px;
  color: #909090;
}

.info a {
  color: #666;
  text-decoration: underline;
}
</style>
