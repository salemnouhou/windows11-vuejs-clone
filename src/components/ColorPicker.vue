<template>
  <div class="">
    <div class="rounded-t-md bg-[#545454A3]/60 w-full relative">
      <div class="text-center py-2 text-white text-lg font-semibold">
        Set Theme
      </div>

      <div class="py-2 px-4 flex gap-4 justify-center items-center">
        <div
          class="h-8 w-8 border border-gray-600 rounded-full flex justify-center items-center"
        >
          <button @click="colorStore.toggleColor('blue')">
            <div
              class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-blue-600"
            ></div>
          </button>
        </div>

        <button @click="colorStore.toggleColor('orange')">
          <div
            class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
          >
            <div
              class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-orange-500"
            ></div>
          </div>
        </button>

        <button @click="colorStore.toggleColor('black')">
          <div
            class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
          >
            <div
              class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-zinc-900"
            ></div>
          </div>
        </button>

        <button @click="colorStore.toggleColor('pink')">
          <div
            class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
          >
            <div
              class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-pink-500"
            ></div>
          </div>
        </button>

        <button @click="colorStore.toggleColor('default')">
          <div
            class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
          >
            <div
              class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-green-400"
            ></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useColorStore } from "@/stores/color";

const colorStore = useColorStore();
const time = ref("");

const updateTimeAndDate = () => {
  const now = new Date();
  time.value = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

onMounted(() => {
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);
});
</script>

<style></style>
