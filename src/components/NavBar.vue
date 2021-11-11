<template>
  <b-nav
    class="navbar navbar-expand-xl navbar-dark fixed-top"
    id="mainNav"
    v-b-scrollspy="100"
  >
    <div class="container">
      <a class="navbar-brand text-gold" href="/#kezdolap"> Lélekinspirátor </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <b-nav-item :href="`${path}#motivacio`">Motiváció</b-nav-item>

          <b-nav-item :href="`${path}#bemutatkozas`">Bemutatkozás</b-nav-item>
          <b-nav-item :href="`${path}#kuldetes`">Küldetésem</b-nav-item>
          <b-nav-item :href="`${path}#szolgaltatasok`"
            >Szolgáltatásaim</b-nav-item
          >
          <b-nav-item :href="`${path}#elerhetoseg`">Elérhetőségeim</b-nav-item>
          <b-nav-item :href="`${path}blog`">Blog</b-nav-item>
        </ul>
      </div>
    </div>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      path: process.env.BASE_URL,
    };
  },
};
</script>