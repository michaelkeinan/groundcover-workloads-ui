<template>
  <div>
    <TopBar />
    <DrawerModal v-if="isDrawerVisible" />
    <RouterView />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import DrawerModal from "../components/DrawerModal/index.vue";
import { mapState } from "vuex";

export default {
  name: "AppContainer",

  components: {
    TopBar,
    DrawerModal,
  },

  computed: {
    ...mapState({
      isDrawerVisible: (state) => state.cpuMemmory.isDrawerVisible,
    }),
  },
};
</script>
