<template>
  <div style="margin-top: 100px">
    <blog-cards
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :id="index"
    ></blog-cards>
  </div>
</template>

<script>
import { getAllBlog } from "./blogTexts.js";
import BlogCards from "./BlogCards.vue";

export default {
  components: {
    BlogCards,
  },
  data() {
    return {
      items: getAllBlog(),
    };
  },
};
</script>