<template>
  <div class="relative w-full h-screen">
    
    <div class="absolute inset-0 bg-cover bg-center filter blur "
    :class="{default: colorStore.currentColor ==='default',
     orange: colorStore.currentColor ==='orange',
     black: colorStore.currentColor ==='black',
     pink: colorStore.currentColor ==='pink',
     green: colorStore.currentColor ==='green'}"
    ></div>

    <div class="absolute inset-0 bg-black bg-opacity-70"></div>

    <div
      class="absolute space-y-4 inset-0 flex flex-col items-center justify-center text-white z-10"
    >
      <!-- <div class="text-center">
        <h1 class="text-7xl font-bold mb-2">{{ time }}</h1>
        <p class="text-xl">{{ date }}</p>
      </div> -->

      <div class=" bg-gray-500 flex uppercase justify-center items-center text-7xl max-h-48 max-w-48 h-48 w-48 rounded-full">
        <span v-if="firstLetter">{{firstLetter}}</span>
        <svg v-if="!firstLetter" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-40">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
     
      </svg>

      </div>

      <form class="flex flex-col"  @submit.prevent="handleSubmit">
  <div class="w-48 max-w-48 h-10 max-h-10">
    <input
      v-model="inputValue"
      required
      class="w-full h-full bg-transparent placeholder:text-center placeholder:text-2xl focus:outline-none text-3xl text-center caret-none"
      placeholder="Entrez votre nom"
      type="text"
    />
  </div>

  <button
    type="submit"
    
    class="mt-10 px-6 py-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-lg"
  >
    Déverrouiller
  </button>
</form>

<!-- <div class="py-8 flex gap-4 justify-center items-center">
        <div
          class="h-8 w-8 border border-gray-600 rounded-full flex justify-center items-center"
        >

       <button @click="colorStore.toggleColor('default')">
        <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-blue-600"
          ></div>
        </button> 

        </div>

      
      <button @click="colorStore.toggleColor('orange')"> <div
          class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-orange-500"
          ></div>
        </div>
      </button> 

       <button @click="colorStore.toggleColor('black')">  <div
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

      <button @click="colorStore.toggleColor('green')"> 
          <div
          class="h-8 w-8 border rounded-full border-gray-600 flex justify-center items-center"
        >
          <div
            class="h-4 w-4 hover:scale-150 cursor-pointer transition duration-700 ease-in-out rounded-full bg-green-400"
          ></div>
        </div>
      </button> 

      </div> -->
    </div>
  </div>
</template>

<script setup>
// @click="$emit('unlock')"
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
import { ref, onMounted, computed } from "vue";
const time = ref("");
const date = ref("");
import { useColorStore } from "@/stores/color";

const colorStore = useColorStore()
const emit = defineEmits(['unlock']);
const  handleSubmit =()=> {
  if (inputValue.value.trim()) {
    userStore.setUserName(inputValue.value)
    emit('unlock');
  }
}

const inputValue = ref('')
const firstLetter = computed(()=>inputValue.value.charAt(0))


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
