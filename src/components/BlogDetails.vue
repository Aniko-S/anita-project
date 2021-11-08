<template>
  <div class="d-flex justify-content-center" style="margin-top: 100px">
    <div class="blog-card-big col-11 col-lg-10 col-xl-8 p-4">
      <div v-html="blog.text"></div>
      <div
        class="d-flex justify-content-end text-center mt-3"
        style="font-style: italic"
      >
        <div>
          <div>Dr Steiber Anita</div>
          <div>tudatosságfejlesztő tréner,</div>
          <div>aranykori párkapcsolati coach,</div>
          <div>lélekinspirátor</div>
        </div>
      </div>
    </div>
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
      return getBlog(this.id);
    },
  },
  metaInfo() {
    return {
      title: this.blog.title,
    };
  },
};
</script>