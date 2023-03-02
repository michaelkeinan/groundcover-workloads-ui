import Vue from "vue";
import Vuex from "vuex";
import workloads from "./modules/workloads";
import cpuMemmory from "./modules/cpuMemory";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    workloads,
    cpuMemmory,
  },
});

export default store;
