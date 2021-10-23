<template>
  <div id="kuldetesem" class="section">
    <div class="bg-orange text-center pt-4">
      <h2>Küldetésem</h2>
      <div class="d-flex flex-wrap">
        <div class="col-12 col-md-8">
          <div class="px-3 h-100 d-flex flex-column justify-content-around">
            <div>
              Szüntelenül az jár az eszemben, s érzés szintjén a lelkemben, hogy
              hogyan is tudnám motiválni az emberi lelkeket abban, hogy
              kíváncsiak legyenek, s hogy hogyan is tudnak ráhangolódni saját
              kincsestáraikra, mely bennük sejlik.
            </div>
            <div>Inspirációt szeretnék adni, hogy:</div>
            <div class="text-gold2">
              Hogyan is ismerd fel Önmagad, hogy a saját Életed éld!?
            </div>
            <div class="text-gold2">
              Hogyan lehet jobb az emberi kapcsolat-rendszered?
            </div>
            <div class="text-gold2">
              Hogyan lehet tiszteletteljesebb az emberi kommunikációd, s hogyan
              ne legyél megalkuvó!?
            </div>
            <div class="text-gold2">
              Hogyan haladhatunk az Egység-Tudat felé, a szív útján, a tudatos
              tudatunkkal karöltve?
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <img
              src="../assets/img/kuldetes.jpg"
              style="width: 90%; max-width: 500px"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-orange">
      <div class="text-center py-5">
        <button class="btn-gold">
          Két út van. Választhatsz, tied a döntés!
        </button>
      </div>

      <div class="bg-line d-flex flex-column">
        <div class="offset-2 col-3 pt-5" style="max-width: 200px">
          <div class="text-center">SZÉLES</div>
          <list-item text="betegség" :xIcon="true" />
          <list-item text="félelem, idegesség" :xIcon="true" />
          <list-item text="önös érdek" :xIcon="true" />
          <list-item text="harc" :xIcon="true" />
          <list-item text="degradáció" :xIcon="true" />
        </div>
        <div class="offset-8 col-4" style="max-width: 320px">
          <div class="text-center">KESKENY</div>
          <list-item text="Szeretet hírnökei, Szív útja" />
          <list-item text="Krisztus Tudat Tudók, Igazak" />
          <list-item text="Tiszta lelkűek" />
          <list-item text="Ősi erkölcs követői" />
          <list-item text="Egészség" />
          <list-item text="Béke – Nyugalom" />
          <list-item text="Együtt – Egymásért" />
          <list-item text="Boldogság" />
          <list-item text="Aranykor felé utazás (mint tudatállapot)" />
        </div>
      </div>
    </div>

    <div class="bg-orange py-5 text-center">
      <div class="text-gold2 mb-3">Egyszerre két Istent nem szolgálhatsz!</div>
      <div class="d-flex flex-wrap justify-content-around">
        <div
          class="
            col-11 col-sm-5 col-lg-4 col-xl-3
            bg-white
            text-center
            rounded-card
            shadow
            p-3
            my-2
          "
        >
          <u>
            <b> Mammon </b>
          </u>
          <div>Pillanatnyi jólét más kárán</div>
        </div>
        <div
          class="
            col-11 col-sm-5 col-lg-4 col-xl-3
            bg-white
            text-center
            rounded-card
            shadow
            p-3
            my-2
          "
        >
          <u>
            <b> Eredeti Forrás </b>
          </u>
          <div>vissza Önmagadhoz</div>
          <div>vissza Egységhez</div>
          <div>vissza Isteni Minőséghez</div>
        </div>
      </div>
      <div class="py-2">Teendő:</div>
      <div>
        <div class="m-2">
          <span class="btn-white"> Totális káosz </span>
        </div>
        <div class="py-2">
          <i
            class="fas fa-arrow-down text-gold2"
            style="height: 30px !important; width: 30px !important"
          ></i>
        </div>
        <div>
          <span class="btn-gold"> Eredeti Isteni Rend (Isteni Terv) </span>
        </div>
      </div>
      <div class="mt-4">Vagyok, aki vagyok</div>
      <div>
        Minden időm, energiám, tudásom erre szentelem, segíteni azokat, akik a
        Lélekfejlődés útján elindultak, vissza az Egy-be. Változtatni szeretnél?
      </div>
      <div class="text-center mt-3">
        <button class="btn-gold">Gyere velem az utazásra!</button>
      </div>
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