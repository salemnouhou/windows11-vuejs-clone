<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from 'vue';
import SmallScreen from "./components/SmallScreen.vue";
const isScreenSmall = ref(false);

const checkScreenSize = () => {
  isScreenSmall.value = window.innerWidth < 1000 || window.innerHeight < 1000;
};

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
