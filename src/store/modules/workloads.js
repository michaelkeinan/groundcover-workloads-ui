import workloadsList from "../rawData/workloadsList.json";

const state = {
  workloadsList: [],
};

const actions = {
  fetchAndParseWorkloadsData: () => {
    state.workloadsList = workloadsList;
  },
};

export default {
  state,
  actions,
};
