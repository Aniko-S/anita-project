<template>
  <div class="d-flex justify-content-center" style="margin-top: 100px">
    <div
      class="blog-card-big col-11 col-lg-10 col-xl-8 p-4"
      v-html="blog"
    ></div>
  </div>
</template>

<script>
import { getBlog } from "./blogTexts.js";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    blog() {
      return getBlog(this.id).text;
    },
  },
};
</script>