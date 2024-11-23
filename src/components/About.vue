<template>
  <div
    class="border-gray-800 border max-h-3/4 h-3/4 max-w-3/5 w-3/5 rounded-md"
  >
    <div
      class="h-[8%] pl-3 rounded-t-md bg-zinc-900 flex justify-between items-center"
    >
      <div class="flex-1 pt-1 flex gap-2 h-full">
        <div
          class="bg-gray-700/45 flex items-center gap-2 px-5 h-full w-2/5 rounded-t-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="32"
            viewBox="0 0 256 253"
          >
            <defs>
              <linearGradient
                id="logosAsyncApiIcon0"
                x1="90.642%"
                x2="12.543%"
                y1="10.337%"
                y2="88.429%"
              >
                <stop offset="0%" stop-color="#21D4FD" />
                <stop offset="3%" stop-color="#27CDFC" stop-opacity="96" />
                <stop offset="23%" stop-color="#4E9CF4" stop-opacity="70" />
                <stop offset="43%" stop-color="#6E73EE" stop-opacity="49" />
                <stop offset="61%" stop-color="#8753E9" stop-opacity="32" />
                <stop offset="77%" stop-color="#993CE5" stop-opacity="20" />
                <stop offset="90%" stop-color="#A42EE3" stop-opacity="13" />
                <stop offset="100%" stop-color="#A829E2" stop-opacity="10" />
              </linearGradient>
            </defs>
            <path
              fill="url(#logosAsyncApiIcon0)"
              d="M195.452 0H60.548C27.108 0 0 26.78 0 59.814v133.268c0 33.035 27.108 59.814 60.548 59.814h134.904c33.44 0 60.548-26.78 60.548-59.814V59.814C256 26.78 228.892 0 195.452 0"
            />
            <path
              fill="#FFF"
              d="m75.025 110.118l7.62-10.373l59.916 42.96l-7.62 10.373zm38.47 0l7.62-10.373l59.915 42.96l-7.619 10.373zm14.551-63.467c-31.617 0-57.451 19.025-58.472 42.698l-.031 1.95h13.009v-.494c0-17.277 20.443-31.34 45.532-31.34s45.531 14.063 45.531 31.34v.495h13.01v-.495c-.075-24.345-26.316-44.154-58.579-44.154m45.44 115.423c0 17.276-20.444 31.34-45.551 31.34s-45.532-14.064-45.532-31.34v-.496H69.394v.496c0 24.344 26.24 44.154 58.503 44.154c31.618 0 57.452-19.025 58.473-42.699l.032-1.95h-13.01z"
            />
          </svg>
          <span class="text-white text-sm">About</span>
        </div>
        <button class="text-white w-10 rounded-md hover:bg-gray-700/45">
          +
        </button>
      </div>
      <div class="flex justify-end items-center flex-1 h-full">
        <button class="w-10 h-full text-white hover:bg-gray-700/45">-</button>
        <button class="w-10 h-full text-white hover:bg-gray-700/45">+</button>
        <button
          @click="menuStore.closeAbout"
          class="w-10 h-full text-white rounded-tr-md hover:bg-red-600"
        >
          x
        </button>
      </div>
    </div>

    <!-- NAVIGATIONS -->
    <div
      class="border border-r-0 border-gray-700 border-l-0 h-[8%] pl-3 bg-zinc-900 grid grid-cols-12"
    >
      <div class="col-span-2 flex py-2">
        <button
          class="flex justify-center rounded-md items-center w-10 h-full text-white hover:bg-gray-700/45"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-3.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          class="flex justify-center items-center rounded-md w-10 h-full text-white hover:bg-gray-700/45"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-3.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        <button
          class="flex justify-center items-center rounded-md w-10 h-full text-white hover:bg-gray-700/45"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-3.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </button>
        <button
          class="flex justify-center items-center rounded-md w-10 h-full text-white hover:bg-gray-700/45"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-3.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <div class="col-span-6 py-1 px-2">
        <div
          class="h-full w-full rounded-md bg-gray-700/45 flex items-center px-2 text-xs gap-1 text-gray-400"
        >
          <span class="p-1 hover:bg-gray-700 rounded-md"> Ce PC</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <span class="p-1 hover:bg-gray-700 rounded-md">Salem</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <span class="p-1 hover:bg-gray-700 rounded-md"> Documents</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <span class="p-1 bg-gray-700 rounded-md">Portfolio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div class="col-span-4 py-1 px-2">
        <div
          class="h-full w-full rounded-md bg-gray-700/45 flex items-center px-2 text-xs gap-2 text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <span>Rechercher dans : Portolio</span>
        </div>
      </div>
    </div>
    <div class="h-[84%] grid grid-cols-5 bg-black/70 backdrop-blur-xl">
      <div
        class="border-r border-gray-600 col-span-1 text-gray-300 p-2 flex flex-col gap-4"
      >
        <button
          @click="changeContent('apropos')"
          class="w-full border border-gray-600 hover:bg-gray-300 hover:text-black flex px-4 rounded-md"
        >
          A Propos
        </button>

        <button
          @click="changeContent('parcours')"
          class="border border-gray-600 hover:bg-gray-300 hover:text-black w-full flex px-4 rounded-md"
        >
          Parcours
        </button>

        <button
          @click="changeContent('skills')"
          class="border border-gray-600 hover:bg-gray-300 hover:text-black w-full flex px-4 rounded-md"
        >
          Skills
        </button>

        <button
          @click="changeContent('realisations')"
          class="border border-gray-600 hover:bg-gray-300 hover:text-black w-full flex px-4 rounded-md"
        >
          Réalisations
        </button>

        <button
          @click="changeContent('resume')"
          class="border border-gray-600 hover:bg-gray-300 hover:text-black w-full flex px-4 rounded-md"
        >
          Resume
        </button>
      </div>
      <component class="h-full col-span-4" :is="currentComponent"></component>
    </div>
    <!-- NAVIGATIONS ENDS HERE -->
  </div>
</template>

<script setup>
import Apropos from "./portfolio/Apropos.vue";
import Parcours from "./portfolio/Parcours.vue";
import Skills from "./portfolio/Skills.vue";
import Realisations from "./portfolio/Realisations.vue";
import Resume from "./portfolio/Resume.vue";
import { ref, computed } from "vue";
import { useMenuStore } from "@/stores/menu.js";

const menuStore = useMenuStore();

function changeContent(content) {
  currentContent.value = content;
}

const components = {
  apropos: Apropos,
  parcours: Parcours,
  skills: Skills,
  realisations: Realisations,
  resume: Resume,
};

const currentContent = ref("apropos");
const currentComponent = computed(() => components[currentContent.value]);
</script>
<style></style>
