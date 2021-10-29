<template>
  <div style="margin-top: 300px">
    <div v-for="(item, index) in items" :key="index">
      <blog-details :item="item"></blog-details>
    </div>
  </div>
</template>

<script>
import blogDatas from "./blogTexts.js";
import BlogDetails from "./BlogDetails.vue";

export default {
  components: {
    BlogDetails,
  },
  data() {
    return {
      items: blogDatas,
    };
  },
};
</script>