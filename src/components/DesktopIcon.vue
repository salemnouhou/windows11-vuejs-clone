<template>
  <button
    @dblclick="double"
    class="flex flex-col p-1 w-16 hover:bg-gray-700 rounded-md justify-center items-center"
  >
    <img class="h-10 w-10" :src="image" alt="Menu Image" />
    <span class="text-white text-sm">{{ name }}</span>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const double = () => {
  if (props.name === "LinkedIn") {
    window.open(
      "https://www.linkedin.com/in/salem-souleymane-nouhou/",
      "_blank"
    );
  }else if(props.name==="Github"){
    window.open(
      "https://github.com/salemnouhou",
      "_blank"
    );
  }
};
</script>

<style></style>
