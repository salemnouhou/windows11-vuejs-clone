<template>
  <div
    class="absolute walpaper inset-0 flex flex-col items-center justify-center bg-cover bg-center text-white"
  >
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-7xl font-bold mb-2">{{ time }}</h1>
      <p class="text-lg">{{ date }}</p>
      <div
        class="flex justify-center items-center p-2 h-10 w-10 rounded-md bg-zinc-900/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>

    <div class="text-center mt-20 font-bold">
      Remote work provides flexibility <br />
      and autonomy - it gets better when <br />
      technology works for you.
    </div>

    <div class="text-center mt-2 font-bold animate-pulse">
      Press any key to continue ...
    </div>

    <div class="absolute bottom-2 flex justify-center items-center w-full">
      <div class="max-w-screen-xl gap-4 px-14 py-4 w-3/4 grid grid-cols-4">
        <Weather />
        <Exchange />
        <Map />
        <Sports />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Weather from "./Weather.vue";
import Sports from "./Sports.vue";
import Map from "./Map.vue";
import Exchange from "./Exchange.vue";
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
const emit = defineEmits(["unlock"]);
const handleKeydown = () => {
  emit("unlock");
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped></style>
