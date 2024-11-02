<template>
  <div
    class="rounded-md hover:shadow-2xl hover:scale-105 transition duration-500"
  >
    <img
      class="shadow-2xl rounded-md object-fill h-full w-full hover:shadow-2xl"
      :src="image"
      alt="Menu Image"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
