<template>
  <div id="szolgaltatasaim" class="my-4">
    <h2 class="text-center">Szolgáltatásaim</h2>
    <div class="bg-orange my-5 mx-4 mx-lg-5 py-3 rounded-card shadow">
      <div class="text-center">EGYÉNI KONZULTÁCIÓK</div>
      <div class="bg-green mt-4 mb-5 mx-3 mx-lg-5 p-2 rounded-card shadow">
        <div class="mx-3 text-gold2">Testi szinten:</div>
        <div class="d-flex flex-wrap">
          <div class="col-12 col-md-6 p-3">
            <div class="h-100 d-flex flex-column justify-content-between">
              <div>
                1. „Test-térkép” készítés EWS bioinformatikai felmérő
                készülékkel
              </div>
              <div class="text-center pt-3" style="width: 95%">
                <img src="../assets/img/ews.jpg" class="w-100" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 p-3">
            <div class="h-100 d-flex flex-column justify-content-between">
              <div>2. „Egészség-kép” harmonizáció BEMER készülékkel</div>
              <div class="text-center pt-3" style="width: 95%">
                <img src="../assets/img/bemer.jpg" class="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green mt-4 mb-5 mx-3 mx-lg-5 p-2 rounded-card shadow">
        <div class="mx-3 text-gold2">Lelki-szellemi síkon:</div>
        <div class="p-3">
          <div>
            Lelki problémák oki felderítése, oldása, átkódolása. Magasabb
            szellemi tartalmak, tanok megismertetése, egy kiteljesedett
            szív-tudatosságon alapuló békés, harmonikus Új Élet előhívásához.
          </div>
          <div>Választható főbb témakörök:</div>
          <list-item text="Elakadások oldása" />
          <list-item text="Önbizalomvesztés" />
          <list-item text="Régi, gyerekkori rossz programozások kikódolása" />
          <list-item text="Krízishelyzet-kezelés" />
          <list-item text="Gyászfeldolgozás" />
          <list-item text="Pánik, félelem, depresszió oldása" />
          <list-item text="Karma oldás" />
          <list-item
            text="Párkapcsolati tanácsadás (válás után, párkeresés, aranykori párkapcsolat)"
          />
          <list-item text="Betegségek lelki hátterének oldása, stb." />
          <div>Milyen speciális problémára szeretnél megoldást?</div>
          <div>Jövő terv-készítése!!! (minden esetben)</div>
          <div>
            Szeretettel várok mindenkit, aki részt szeretne venni saját
            JÖVŐTEREMTÉSÉNEK MŰVÉSZI MEGALKOTÁSÁBAN!
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-orange
        my-5
        mx-4 mx-lg-5
        text-center
        p-2
        rounded-small-card
        shadow
      "
    >
      <div>CSOPORTFOGLALKOZÁSOK, WORK-SHOPOK</div>
      <div>Folyamatosan indulnak majd, kövesd a posztokat!</div>
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