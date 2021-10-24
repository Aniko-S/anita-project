<template>
  <div class="my-2">
    <div class="d-flex">
      <div style="flex: 0 0 30px" class="d-flex justify-content-center">
        <i
          v-if="xIcon"
          class="far fa-times-circle text-danger"
          style="font-size: 18px; margin-top: 2px"
        ></i>
        <img
          v-else
          src="../assets/img/arany-vilag.png"
          class="w-75 pb-1"
          style="height: 27px"
        />
      </div>
      <div style="flex: 1 1 auto">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "xIcon"],
};
</script>