<template>
  <div>
    <div id="premium-ad-spot">
      🚀Coming soon:
      <a
        href="https://continuouslifecycle.london/"
        rel="sponsored"
      >Continuous Lifecycle London 2020</a>
      <span class="goto-symbol">&raquo;</span><sup class="sponsored-label">SPONSORED</sup>
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
  padding: 8px 10px;
}

a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}

.sponsored-label {
  font-size: 9px;
  color: #999;
  margin-left: 6px;
}
</style>
