<template>
  <div id="segitek" class="mx-2 my-5">
    <h4 class="text-center">
      Miben tudok Neked, mint Csodálatos Lénynek hozzájárulás lenni Életed új
      mederbe tereléséhez?
    </h4>
    <h6 class="text-center">
      Komplex, saját egyénileg feldolgozott módszerem alapján hazavezetlek
      Önmagadhoz, sebesült lelked kigyógyul, meggyógyul az alábbi sebesülés
      mintákból:
    </h6>

    <div class="d-flex flex-row flex-wrap">
      <div
        class="
          col-5
          d-none d-md-flex d-lg-none
          justify-content-center
          align-items-center
        "
      >
        <img src="../assets/img/parkapcsolat.jpg" class="w-75" />
      </div>
      <div class="col-12 col-md-7 col-lg-12 px-3">
        <div class="d-flex flex-row flex-wrap">
          <div class="col-12 col-lg-4">
            <div class="d-flex flex-column justify-content-around h-100">
              <list-item
                text="Elakadások, megrekedések, életcsomók vannak bizonyos
                  életterületeden?"
              />
              <list-item
                text="Krízishelyzetben vagy, s nem tudod, hogyan tovább?"
              />
              <list-item text="Magánéleti feloldatlan konfliktusod van?" />
              <list-item text="Elváltál, s nem tudod, hogyan tovább?" />
            </div>
          </div>
          <div class="col-12 col-lg-4 text-center d-md-none d-lg-block">
            <img src="../assets/img/parkapcsolat.jpg" class="w-75" />
          </div>
          <div class="col-12 col-lg-4">
            <div class="d-flex flex-column justify-content-around h-100">
              <list-item text="Önértékelési problémád van?" />
              <list-item text="Tele vagy félelemérzettel?" />
              <list-item text="Depressziós, elkeseredett, lehangolt vagy?" />
              <list-item text="Állandó belső feszültség gyötör?" />
              <list-item
                text="Krónikus betegséged lelki hátterét szeretnéd feloldani, hogy
                  újra felépülj?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button class="btn-gold">
        Megoldás: Eredeti Önvalód megismerése! Visszatalálni az Isteni
        minőséghez!
      </button>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
};
</script>