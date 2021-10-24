<template>
  <div class="section">
    <h1 id="szolgaltatasok" class="text-center py-4">Szolgáltatásaim</h1>
    <div class="bg-orange rounded-card mx-3 mx-md-4 mx-lg-5 py-4 shadow">
      <h4 class="text-center text-red">EGYÉNI KONZULTÁCIÓK</h4>
      <div
        class="bg-colorful rounded-card mx-3 mx-md-4 mx-lg-5 py-2 mt-3 shadow"
      >
        <h4 class="mx-3 mt-3 text-dark-green">Testi szinten:</h4>
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
      <div
        class="bg-colorful mx-3 mx-md-4 mx-lg-5 py-2 mt-3 rounded-card shadow"
      >
        <h4 class="mx-3 mt-3 text-dark-green">Lelki-szellemi síkon:</h4>
        <div class="p-3">
          <list-item
            text="Lelki problémák oki felderítése, oldása, átkódolása."
          />
          <list-item
            text="Magasabb
            szellemi tartalmak, tanok megismertetése, egy kiteljesedett
            szív-tudatosságon alapuló békés, harmonikus Új Élet előhívásához."
          />

          <h5 class="text-red pt-3">Választható főbb témakörök:</h5>
          <div class="d-flex flex-wrap">
            <div class="col-12 col-md-6">
              <div class="d-flex flex-column align-items-between">
                <list-item text="Elakadások oldása" />
                <list-item text="Önbizalomvesztés" />
                <list-item
                  text="Régi, gyerekkori rossz programozások kikódolása"
                />
                <list-item text="Krízishelyzet-kezelés" />
                <list-item text="Gyászfeldolgozás" />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <list-item text="Pánik, félelem, depresszió oldása" />
              <list-item text="Karma oldás" />
              <list-item
                text="Párkapcsolati tanácsadás (válás után, párkeresés, aranykori párkapcsolat)"
              />
              <list-item text="Betegségek lelki hátterének oldása" />
              <list-item text="Jövő terv-készítése!!! (minden esetben)" />
            </div>
          </div>

          <div class="text-center p-4">
            <img
              src="../assets/img/arany-lany.jpg"
              alt="Aranykori Lélekhangoló"
              class="w-100"
              style="max-width: 400px"
            />
          </div>

          <div class="text-center text-red" style="font-size: 20px">
            <div>Milyen speciális problémára szeretnél megoldást?</div>
            <div>
              Szeretettel várok mindenkit, aki részt szeretne venni saját
            </div>
            <div>JÖVŐTEREMTÉSÉNEK MŰVÉSZI MEGALKOTÁSÁBAN!</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-orange
        rounded-small-card
        mx-3 mx-md-4 mx-lg-5
        py-4
        my-5
        shadow
        text-center
      "
    >
      <h4>CSOPORTFOGLALKOZÁSOK, WORK-SHOPOK</h4>
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