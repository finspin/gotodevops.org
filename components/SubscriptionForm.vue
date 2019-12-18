<template>
  <div>
    <form
      action="https://formspree.io/subscribe@gotodevops.org"
      method="POST"
      class="form-inline mb-2 mt-2"
    >
      <input
        class="form-control col-sm-6"
        id="email"
        style="height:36px"
        name="email"
        type="text"
        placeholder="Enter your email"
      />
      <button type="submit" class="btn col-sm-6">Send me new conferences!</button>
    </form>
    <p>
      Join
      <span class="number-of-subscribers">978</span> DevOps enthusiasts and get notified of new DevOps conferences!
    </p>
  </div>
</template>

<script>
export default {
  name: "SubscriptionForm"
};
</script>

<style scoped>
p {
  color: #666;
  font-size: 14px;
}

.number-of-subscribers {
  color: #222;
  font-size: 18px;
}

h2 {
  font-size: 18px;
  font-weight: 400;
  color: #13273e;
  text-align: center;
}

input#email {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  font-size: 15px;
}

button {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #fb4d33;
  border-color: #fb4d33;
  font-size: 15px;
  padding-top: 8px;
}

button:hover,
button:active {
  background-color: #ff4326;
  border-color: #ff4326;
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

@media (min-width: 768px) {
  input#email {
    border-radius: 5px 0 0 5px !important;
    -moz-border-radius: 5px 0 0 5px !important;
    -webkit-border-radius: 5px 0 0 5px !important;
    border-right: none;
  }

  button {
    border-radius: 0 5px 5px 0;
    -moz-border-radius: 0 5px 5px 0;
    -webkit-border-radius: 0 5px 5px 0;
  }
}

@media (max-width: 768px) {
  input#email {
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
