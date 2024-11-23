<template>
  <div
    class="p-4 space-y-6 text-white shadow-2xl hover:scale-105 transform duration-700 rounded-md bg-zinc-600/20 backdrop-blur-xl"
  >
    <div class="flex justify-between items-center">
      <img class="h-6" src="/src/assets/images/github.png" alt="" />
    </div>
    <div class="space-y-2">
      <span>{{ title }}</span>
      <p class="text-sm italic text-gray-400">{{ description }}</p>
    </div>
    <div class="flex gap-2">
      <div
        class="hover:bg-gray-300 hover:text-black rounded-md border-gray-700 text-sm flex gap-2 justify-center items-center border py-2 px-2"
      >
        {{ techno1 }}
      </div>

      <div
        class="hover:bg-gray-300 hover:text-black rounded-md border-gray-700 text-sm flex gap-2 justify-center items-center border py-2 px-2"
      >
        {{ techno2 }}
      </div>
      <div
        v-if="techno3"
        class="hover:bg-gray-300 hover:text-black rounded-md border-gray-700 text-sm flex gap-2 justify-center items-center border py-2 px-2"
      >
        {{ techno3 }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techno1: {
    type: String,
    required: true,
  },
  techno2: {
    type: String,
    required: true,
  },
  techno3: {
    type: String,
    required: false,
  },
});
</script>

<style></style>
