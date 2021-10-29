<template>
  <div>
    <kezdolap />
    <inspirallak />
    <aranykozi-tudatossag />
    <segitek />
    <bemutatkozas />
    <kuldetesem />
    <szolgaltatasaim />
    <elerhetoseg />
  </div>
</template>

<script>
import Kezdolap from "./Kezdolap.vue";
import Inspirallak from "./Inspirallak.vue";
import AranykoziTudatossag from "./AranykoziTudatossag.vue";
import Segitek from "./Segitek.vue";
import Bemutatkozas from "./Bemutatkozas.vue";
import Kuldetesem from "./Kuldetesem.vue";
import Szolgaltatasaim from "./Szolgaltatasaim.vue";
import Elerhetoseg from "./Elerhetoseg.vue";

export default {
  components: {
    Kezdolap,
    Inspirallak,
    AranykoziTudatossag,
    Segitek,
    Bemutatkozas,
    Kuldetesem,
    Szolgaltatasaim,
    Elerhetoseg,
  },
};
</script>