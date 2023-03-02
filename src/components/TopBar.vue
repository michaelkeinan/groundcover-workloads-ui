<template>
  <header class="top-bar">
    <div class="logo">
      <img src="../assets/circus-tent_1f3aa 3.svg" alt="logo" />
    </div>
    <div class="app-header-title">OVERVIEW</div>
  </header>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  z-index: 15;
  width: 100%;
  height: 5.3vh;
  display: flex;
  background-color: var(--color-white);
  border: 1.5px solid rgba(51, 51, 51, 0.15);
  box-shadow: 0px 0.5px 0.5px rgba(196, 196, 196, 0.15);
  padding-left: 2em;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo > img {
  height: 65%;
  object-fit: contain;
}
.app-header-title {
  display: flex;
  padding-left: 1em;
  align-items: center;
  font-style: normal;
  font-weight: 880;
  font-size: 1.3rem;
  line-height: 22px;
  letter-spacing: 0.18px;
  color: var(--color-black-text);
}
</style>
