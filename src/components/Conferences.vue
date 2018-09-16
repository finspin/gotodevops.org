<template>
    <transition-group id="conferences" class="container" name="fade" tag="div">
      <conference v-for="conference in filteredConferences"
                  :key="conference.url + conference.location.city"
                  :conference=conference></conference>
    </transition-group>
</template>

<script>
  import Conference from './Conference'
  import {mapGetters} from 'vuex'

  export default {
    name: "Conferences",
    components: {
      Conference
    },
    computed: {
      ...mapGetters([
        'filteredConferences'
      ])
    }
  }
</script>

<style scoped>
  #conferences {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
