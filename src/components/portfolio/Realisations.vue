<template>
  <div class="grid grid-cols-2 gap-4 py-2 px-4">
    <Projects
      title="Rottten Tomatoes"
      description="A Movie website like Netflix"
      techno1="NEXT"
      techno2="TAILWIND"
      techno3="POSTGRESQL"
    />
    <Projects
      title="Show Time"
      description="Concert Ticket System"
      techno1="VUE"
      techno2="TAILWIND"
      techno3="MONGO"
    />
    <Projects
      title="Epicture"
      description="Trello Clone with React Native"
      techno1="REACT NATIVE"
      techno2="TAILWIND"
    />
    <Projects
      title="Feu Gourmet"
      description="Ecommerce Website"
      techno1="NEXT"
      techno2="TAILWIND"
      techno3="MONGO"
    />
  </div>
</template>

<script setup>
import Projects from "../github/Projects.vue";
</script>

<style></style>
