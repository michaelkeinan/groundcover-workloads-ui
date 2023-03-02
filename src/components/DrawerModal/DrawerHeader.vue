<template>
  <header class="drawer-top-bar">
    <div @click="() => SET_DRAWER_VISIBLE(false)" class="close">
      <img src="../../assets/close.svg" alt="close" />
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "DrawerHeader",

  methods: {
    ...mapMutations(["SET_DRAWER_VISIBLE"]),
  },
};
</script>

<style scoped>
.drawer-top-bar {
  width: 100%;
  height: 5.3vh;
  display: flex;
  border: 1.5px solid rgba(51, 51, 51, 0.15);
  box-shadow: 0px 0.5px 0.5px rgba(196, 196, 196, 0.15);
  padding-left: 2em;
}
.close {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.close > img {
  height: 65%;
  object-fit: contain;
}
</style>
