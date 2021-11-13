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
      meta: [
        {
          property: "og:title",
          content: this.blog.title,
        },
        {
          property: "og:image",
          content: `https://aniko-s.github.io/anita-project/${this.blog.img}.jpg`,
        },
        {
          property: "og:description",
          content:
            "Dr Steiber Anita tudatosságfejlesztő tréner, aranykori párkapcsolati coach, lélekinspirátor",
        },
        {
          property: "og:url",
          content: `https://aniko-s.github.io/anita-project/blog/${this.id}`,
        },
        {
          property: "og:type",
          content: "article",
        },
      ],
    };
  },
};
</script>