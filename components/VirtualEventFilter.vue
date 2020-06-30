<template>
  <div class="row virtual-event-filter">
    <div class="col-12">
      <div class="filter-label">Virtual event
      </div>
      <div class="row">
        <div class="col-6 pr-2 pr-sm-3">
          <div
            @click="applyVirtualEventFilter(true)"
            :class="['virtual-event', { active: isActive(true) }]"
          >YES</div>
        </div>
        <div class="col-6 pr-2 pl-2 pr-sm-3 pl-sm-3">
          <div @click="applyVirtualEventFilter(false)" :class="['virtual-event', { active: isActive(false)} ]">NO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "VirtualEventFilter",
  computed: {
    ...mapState(["filters"])
  },
  methods: {
    ...mapMutations(["UPDATE_VIRTUAL_EVENT_FILTER"]),
    applyVirtualEventFilter: function(virtualEvent) {
      this.UPDATE_VIRTUAL_EVENT_FILTER(virtualEvent);
    },
    isActive: function(virtualEvent) {
      return this.filters.virtualEvent === virtualEvent;
    }
  }
};
</script>

<style scoped>
.virtual-event-filter {
  padding-bottom: 25px;
}

.virtual-event {
  border: 1px solid #d4dde9;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  padding: 9px 0;
  color: #545e6d;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}

.virtual-event:hover {
  background-color: #eceef0;
}

.virtual-event.active {
  background-color: #ffa630;
  border: 1px solid #ffa630;
  color: #fff;
}

.filter-label {
  font-size: 15px;
  color: #13273e;
  margin-bottom: 5px;
}

@media (max-width: 576px) {
  .virtual-event {
    padding: 5px 0;
    font-weight: 400;
  }
}
</style>
