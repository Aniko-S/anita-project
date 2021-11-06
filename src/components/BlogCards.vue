<template>
  <div class="d-flex flex-column">
    <div
      class="blog-card col-12 col-md-10 col-lg-9 col-xl-8"
      style="height: fit-content"
    >
      <div class="col-12 col-md-6 p-0" style="height: fit-content">
        <b-img
          :src="require(`../assets/img/blog/${item.img}.jpg`)"
          :alt="item.title"
          class="w-100"
        />
      </div>
      <div
        class="col-12 col-md-6 p-3 blog-card-text"
        style="position: relative"
      >
        <div
          style="
            position: absolute;
            overflow: hidden;
            left: 16px;
            top: 16px;
            right: 16px;
            bottom: 40px;
          "
          v-html="item.text"
        ></div>
        <router-link :to="`/blog/${id}`" target="_blank">
          <div
            style="position: absolute; bottom: 12px; right: 10px"
            class="text-dark"
          >
            Tovább...
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "id"],
};
</script>
