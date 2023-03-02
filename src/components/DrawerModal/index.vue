<template>
  <div class="right-drawer">
    <DrawerHeader />
    <LineChart />
  </div>
</template>

<script>
import DrawerHeader from "./DrawerHeader.vue";
import LineChart from "../LineChart.vue";

export default {
  name: "DrawerModal",

  components: {
    DrawerHeader,
    LineChart,
  },

  data() {
    return {
      drawerVisible: false,
    };
  },
};
</script>

<style scoped>
.right-drawer {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  overflow: hidden;
  height: 100vh;
  padding-left: 0;
  border-left: 1px solid whitesmoke;
  background: var(--background-gray);
  z-index: 200;
  transition: all 0.2s;
  border: 1.5px solid rgba(51, 51, 51, 0.15);
}

.drawer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
  transition: opacity 0.2s;
}
</style>
