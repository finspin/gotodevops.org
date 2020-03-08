<template>
  <div>
    <div id="premium-ad-spot">
      <a
        href="https://continuouslifecycle.london/"
        rel="sponsored"
      >
        <img
          src="~/assets/sam-newman-continuous-lifecycle.jpg"
          alt=""
          class="responsive"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumAdSpot"
};
</script>

<style scoped>
#premium-ad-spot {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  text-align: center;
}

a {
  text-decoration: none;
}

.responsive {
  width: 100%;
  max-width: 970px;
  height: auto;
}
</style>
