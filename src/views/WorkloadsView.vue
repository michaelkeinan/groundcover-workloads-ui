<template>
  <div class="workloads-view-container">
    <WorkloadsTile
      v-for="workloadItem in workloadsList"
      :key="workloadItem.entityId"
      :name="workloadItem.workload"
      :issuesCount="workloadItem.issuesCount"
      :isHealthy="workloadItem.status"
      :namespace="workloadItem.namespace"
    />
  </div>
</template>

<script>
import WorkloadsTile from "../components/WorkloadsTile.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "WorkloadsView",

  components: {
    WorkloadsTile,
  },

  created() {
    this.fetchAndParseWorkloadsData();
  },

  computed: {
    ...mapState({
      workloadsList: (state) => state.workloads.workloadsList,
    }),
  },
  methods: {
    ...mapActions(["fetchAndParseWorkloadsData"]),
  },
};
</script>

<style scoped>
.workloads-view-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
