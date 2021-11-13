<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  metaInfo: {
    title: "Lélekinspirátor",
  },
};
</script>

<style>
@import "./assets/style.css";
@import "./assets/styles2.css";
@import url("https://fonts.googleapis.com/css2?family=Sofia&display=swap");
</style>
