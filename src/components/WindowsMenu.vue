<template>
  <div class="" >
    <div
      class="rounded-t-md backdrop-blur-lg bg-zinc-900/45 absolute h-[91%] w-full"
    >
      <div class="p-8 text-white">
        <MenuInput />
      </div>
      <div class="px-14 py-4 text-white">
        <div class="flex justify-between">
          <span class="font-semibold">Pinned</span>
          <span class="text-sm rounded-md p-1 pl-2 pr-5 bg-zinc-700/25"
            >All apps</span
          >
        </div>
      </div>
      <div></div>
      <MenuSoftwares />
    </div>

    <div
      class="flex justify-between items-center px-14 rounded-b-md absolute bottom-0 h-[9%] backdrop-blur-lg bg-zinc-900/65 w-full"
    >
      <div class="flex items-center gap-3">
        <div class=" bg-cyan-400 flex justify-center items-center h-8 w-8 rounded-full  ">
          
          <span class="text-xl font-thin uppercase">{{firstLetter}}</span>
    

        </div>
        <span class="text-white">{{ userStore.username }}</span>
      </div>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12 12q-.425 0-.712-.288T11 11V3q0-.425.288-.712T12 2t.713.288T13 3v8q0 .425-.288.713T12 12m0 9q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 12q0-1.525.5-2.963T4.95 6.4q.275-.35.7-.337t.75.337q.275.275.25.675t-.275.75Q5.7 8.725 5.35 9.8T5 12q0 2.925 2.038 4.963T12 19t4.963-2.037T19 12q0-1.15-.337-2.238T17.6 7.775q-.25-.325-.275-.712t.25-.663q.3-.3.725-.312t.7.312q.975 1.2 1.488 2.625T21 12q0 1.875-.712 3.513t-1.925 2.85t-2.85 1.925T12 21"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuInput from "./MenuInput.vue";
import MenuSoftwares from "./MenuSoftwares.vue";
import Recommended from "./Recommended.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

import { computed } from "vue";
const firstLetter = computed(()=>userStore.username.charAt(0))


</script>

<style></style>
