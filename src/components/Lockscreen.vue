<template>
  <div class="relative w-full h-screen">
    <div class="absolute inset-0 bg-cover bg-center filter blur green"></div>

    <div class="absolute inset-0 bg-black bg-opacity-70"></div>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
    >
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-2">{{ time }}</h1>
        <p class="text-lg">{{ date }}</p>
      </div>

      <button
        @click="$emit('unlock')"
        class="mt-10 px-6 py-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-lg"
      >
        Déverrouiller
      </button>
      <div class="py-8 flex gap-4 justify-center items-center">
        <div
          class="h-8 w-8 border border-gray-600 rounded-full flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-blue-600"
          ></div>
        </div>

        <div
          class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-orange-500"
          ></div>
        </div>

        <div
          class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-zinc-900"
          ></div>
        </div>

        <div
          class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-pink-500"
          ></div>
        </div>

        <div
          class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-green-400"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const time = ref("");
const date = ref("");

const updateTimeAndDate = () => {
  const now = new Date();
  time.value = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  date.value = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

onMounted(() => {
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);
});
</script>

<style scoped></style>
