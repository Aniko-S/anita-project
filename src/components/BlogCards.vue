<template>
  <div class="d-flex flex-column align-items-center">
    <router-link
      :to="`/blog/${id}`"
      target="_blank"
      class="blog-card col-11 col-md-10 col-lg-9 col-xl-8"
    >
      <div class="col-12 col-md-6 p-0" style="height: 400px">
        <div class="d-flex h-100 justify-content-center">
          <b-img
            :src="require(`../assets/img/blog/${item.img}.jpg`)"
            :alt="item.title"
            class="w-100"
            style="object-fit: cover"
          />
        </div>
      </div>
      <div
        class="col-12 col-md-6 p-3 blog-card-text"
        style="position: relative; height: 400px"
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

        <div
          style="
            position: absolute;
            bottom: 12px;
            right: 0px;
            left: 0px;
            font-weight: bold;
          "
          class="text-dark text-center"
        >
          ...Tovább
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["item", "id"],
};
</script>
