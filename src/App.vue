<template>
  <div id="app">
    <nav-bar />
    <kezdolap />
    <inspirallak />
    <aranykozi-tudatossag />
    <segitek />
    <bemutatkozas />
    <kuldetesem />
    <szolgaltatasaim />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Kezdolap from "./components/Kezdolap.vue";
import Inspirallak from "./components/Inspirallak.vue";
import AranykoziTudatossag from "./components/AranykoziTudatossag.vue";
import Segitek from "./components/Segitek.vue";
import Bemutatkozas from "./components/Bemutatkozas.vue";
import Kuldetesem from "./components/Kuldetesem.vue";
import Szolgaltatasaim from "./components/Szolgaltatasaim.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Kezdolap,
    Inspirallak,
    AranykoziTudatossag,
    Segitek,
    Bemutatkozas,
    Kuldetesem,
    Szolgaltatasaim,
  },
};
</script>

<style>
@import "./assets/style.css";
@import "./assets/styles2.css";
@import url("https://fonts.googleapis.com/css2?family=Sofia&display=swap");
</style>
