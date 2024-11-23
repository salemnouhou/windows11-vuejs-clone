<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useleftMenuStore } from "@/stores/leftmenu.js";
import { useMenuStore } from "@/stores/menu.js";
import { useColorStore } from "@/stores/color";
import { useRightMenuStore } from "@/stores/rightmenu";
import Taskabar from "@/components/Taskabar.vue";
import WindowsMenu from "@/components/WindowsMenu.vue";
import ScreenSaver from "@/components/ScreenSaver.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import Lockscreen from "@/components/Lockscreen.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import DesktopIcon from "@/components/DesktopIcon.vue";
import draggable from "vuedraggable";
import SmallScreen from "@/components/SmallScreen.vue";
const menuStore = useMenuStore();
const leftMenuStore = useleftMenuStore();
const isScreensaverActive = ref(true);
const isLocked = ref(true);
const colorStore = useColorStore();
const rightMenuStore = useRightMenuStore();
import About from "@/components/About.vue";
const datas = ref([
  // { name: 'About', image: '/src/assets/images/folder.png' },
  { name: "LinkedIn", image: "/assets/images/LinkedIn.png" },
  { name: "Github", image: "/assets/images/github.svg" },
  { name: "Terminal", image: "/assets/images/terminal.png" },
  { name: "Power", image: "/assets/images/power.png" },
  { name: "Spotify", image: "/assets/images/spotify.png" },
  { name: "vsCode", image: "/assets/images/code.png" },
  { name: "OneNote", image: "/assets/images/note.png" },
]);

const about = ref(false);

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener("resize", updateDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDimensions);
});
</script>

<template>
  <div class="bg-zinc-800" v-if="width < 1280">
    <SmallScreen />
  </div>

  <div class="relative h-screen w-full">
    <Transition name="fade-in">
      <ScreenSaver
        v-if="isScreensaverActive"
        @unlock="isScreensaverActive = false"
      />
    </Transition>

    <transition name="slide-up" v-if="!isScreensaverActive">
      <Lockscreen v-if="isLocked" @unlock="isLocked = false" />
    </transition>

    <Transition name="fade-in" v-if="!isLocked">
      <div
        class="md:relative h-[100vh]"
        :class="{
          default: colorStore.currentColor === 'default',
          orange: colorStore.currentColor === 'orange',
          black: colorStore.currentColor === 'black',
          pink: colorStore.currentColor === 'pink',
          blue: colorStore.currentColor === 'blue',
        }"
      >
        <!-- DESKTOP ICONS STARTS HERE -->
        <div class="px-2 py-2 flex h-[93vh]">
          <draggable
            :move="onMove"
            v-model="datas"
            item-key="name"
            class="flex flex-col gap-6"
          >
            <template #item="{ element }">
              <DesktopIcon :name="element.name" :image="element.image" />
            </template>
          </draggable>

          <div class="w-full flex justify-center items-center">
            <About v-if="menuStore.about" />
          </div>
        </div>

        <!-- DESKTOP ICONS ENDS HERE -->
        <Transition>
          <WindowsMenu
            v-if="menuStore.isActive"
            class="h-5/6 relative md:absolute md:bottom-14 md:left-1/2 md:transform md:-translate-x-1/2 md:w-1/3 rounded-md border border-gray-700"
          />
        </Transition>

        <Transition>
          <LeftMenu
            v-if="leftMenuStore.isActive"
            class="h-6/7 relative md:absolute md:bottom-14 md:left-2 md:transform md:w-1/4 rounded-md"
          />
        </Transition>

        <Transition>
          <ColorPicker
            v-if="rightMenuStore.isActive"
            class="fixed bottom-14 right-4 h-6/7 rounded-md"
          />
        </Transition>

        <Taskabar class="md:absolute md:w-full md:bottom-0 backdrop-blur-xl" />
      </div>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  @apply transition-opacity duration-700 ease-in-out;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-transform duration-700 ease-out;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(-100%);
}
</style>
