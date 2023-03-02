import workloadsVelocity from "../rawData/workloadVelocity.json";

const state = {
  isDrawerVisible: false,
  workloadsVelocitiesList: [],
};

const mutations = {
  SET_DRAWER_VISIBLE(state, isVisible) {
    state.isDrawerVisible = isVisible;
  },
};

const actions = {
  fetchAndParseWorkloadsData: () => {
    state.workloadsVelocitiesList = workloadsVelocity.velocities;
  },
};

export default {
  state,
  mutations,
  actions,
};
