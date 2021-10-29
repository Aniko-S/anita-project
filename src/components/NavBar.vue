<template>
  <b-nav
    class="navbar navbar-expand-xl navbar-dark fixed-top"
    id="mainNav"
    v-b-scrollspy="100"
  >
    <div class="container">
      <a class="navbar-brand text-gold" href="#kezdolap"> Lélekinspirátor </a>
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
          <b-nav-item href="#motivacio">Motiváció</b-nav-item>
          <b-nav-item href="#bemutatkozas">Bemutatkozás</b-nav-item>
          <b-nav-item href="#kuldetes">Küldetésem</b-nav-item>
          <b-nav-item href="#szolgaltatasok">Szolgáltatásaim</b-nav-item>
          <b-nav-item href="#elerhetoseg">Elérhetőségeim</b-nav-item>
          <b-nav-item href="/blog">Blog</b-nav-item>
        </ul>
      </div>
    </div>
  </b-nav>
</template>