<template>
    <div class="">
      <div
        class="rounded-t-md bg-[#545454A3]/60  w-full relative"
      >
      <div class="h-10 flex justify-center items-center p-2 rounded-md bg-zinc-800 w-10  absolute right-2 top-1">
        <img class="rounded-full" src="/src/assets/images/profil.jpeg" alt="">

    </div>
      
      <div class="text-center py-2 text-white text-xl font-semibold">
       {{time}}
      </div>
      
        <div class=" p-4 text-white">
          <input placeholder="Search the web" class="placeholder:text-sm px-4 focus:outline-none text-gray-3 rounded-md border border-gray-700 00 w-full h-8 bg-[#0000001A]/30" type="text">
        </div>
        <div class=" py-2 px-4 grid grid-cols-2 text-white auto-rows-[130px]  gap-2">
                <Menucard image="/src/assets/images/weather.png" />
                <Menucard image="/src/assets/images/trafic.png" />
                <Menucard image="/src/assets/images/movers.png" />

                <Menucard image="/src/assets/images/outlook.png" class="row-span-2"/>
                <Menucard image="/src/assets/images/photos.png" class="row-span-2"/>
                <Menucard image="/src/assets/images/todo.png"/>

        </div>
       
      </div>
  
     
    </div>
  </template>
  
  <script setup>
  import { useleftMenuStore } from "@/stores/leftmenu.js";
  const leftMenuStore = useleftMenuStore();

  import MenuInput from "./MenuInput.vue";
  import MenuSoftwares from "./MenuSoftwares.vue";
  import Recommended from "./Recommended.vue";
  import { onMounted } from "vue";
  import { ref } from 'vue'
import Menucard from "./Menucard.vue";

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
  