<template>
  <div class="workloads-tile-container">
    <div @click="() => SET_DRAWER_VISIBLE(true)" class="workloads-tile">
      <div
        class="workloads-status-container"
        :class="{ 'color-white': isHealthy }"
      >
        <div class="status-icon">
          <img v-if="isHealthy" src="../assets/sun.svg" />
          <img v-else src="../assets/cloud.svg" />
        </div>
        <div class="workload-dark-text">
          {{ issuesCount }}
        </div>
        <div class="status-text">ISSUES</div>
      </div>
      <div class="tiny-vertical-spacer" />
      <div
        class="workloads-info-container"
        :class="{ 'color-white': isHealthy }"
      >
        <div class="workload-dark-text dark-text-small-font">
          {{ name }}
        </div>
        <div class="namespace-text">{{ namespace }}</div>
        <div>
          <BarChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BarChart from "../components/BarChart.vue";
export default {
  name: "WorkloadsTile",

  props: {
    name: {
      type: String,
      default: "",
    },
    issuesCount: {
      type: Number,
      default: 0,
    },
    isHealthy: {
      type: Boolean,
      default: false,
    },
    namespace: {
      type: String,
      default: "",
    },
  },

  components: {
    BarChart,
  },

  methods: {
    ...mapMutations(["SET_DRAWER_VISIBLE"]),
  },
};
</script>

<style scoped>
.workloads-tile-container {
  min-width: 22.5%;
  max-width: 22.5%;
  height: 18vh;
  display: flex;
  background-color: var(--background-gray);
  flex: 1 1 0;
  padding: 1em;
}
.workloads-tile {
  display: flex;
  width: 100%;
  height: 100%;
  border: 0.663583px solid rgba(51, 51, 51, 0.1);
  box-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
}

.tiny-vertical-spacer {
  width: 0.5%;
  background-color: var(--background-gray);
}
.workloads-status-container {
  width: 24.5%;
  background-color: #edf6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.status-icon {
  max-height: 6vh;
}

.status-icon > img {
  height: 70%;
  object-fit: contain;
}
.workloads-info-container {
  width: 75%;
  background-color: #edf6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.workload-dark-text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 19.9075px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #404145;
}
.status-text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 7.963px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.663583px;
  color: rgba(64, 65, 69, 0.5);
}
.color-white {
  background-color: var(--color-white);
}
.namespace-text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;

  letter-spacing: 0.03em;

  color: rgba(51, 51, 51, 0.5);
}
.dark-text-small-font {
  font-size: 13px;
}
</style>
