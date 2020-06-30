<template>
  <div>
    <div class="container sponsored">
      <conference
        v-for="conference in sponsoredConferences"
        :key="conference.url"
        :conference=conference
      ></conference>
    </div>
    <transition-group
      id="conferences"
      class="container"
      name="fade"
      tag="div"
    >
      <conference
        v-for="conference in filteredConferences"
        :key="conference.url"
        :conference=conference
      ></conference>
    </transition-group>
  </div>
</template>

<script>
import Conference from "./Conference";
import { mapGetters } from "vuex";

export default {
  name: "Conferences",
  components: {
    Conference
  },
  computed: {
    ...mapGetters(["filteredConferences", "sponsoredConferences"])
  }
};
</script>

<style scoped>
#conferences {
  padding-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

.sponsored {
  background-color: #fffbdb;
}
</style>
