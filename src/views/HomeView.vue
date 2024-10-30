<script setup>
import Taskabar from '@/components/Taskabar.vue';
import WindowsMenu from '@/components/WindowsMenu.vue';
import {useMenuStore} from '@/stores/menu.js';
const menuStore = useMenuStore()
import { ref } from 'vue'
import ScreenSaver from '@/components/ScreenSaver.vue'
import Lockscreen from '@/components/Lockscreen.vue'

const isScreensaverActive = ref(true) 
const isLocked = ref(true) 

</script>

<template >

        <div class="relative h-screen w-full">


            <Transition name="fade-in">
            <ScreenSaver v-if="isScreensaverActive" @unlock="isScreensaverActive = false" />
            </Transition>

    <transition name="slide-up" v-if="!isScreensaverActive">
      <Lockscreen v-if="isLocked" @unlock="isLocked = false" />
    </transition>

            <Transition name="fade-in" v-if="!isLocked">
            
                <div  class="default md:relative h-[100vh]">
                        <Transition>
                        <WindowsMenu v-if="menuStore.isActive" class="h-5/6 relative md:absolute md:bottom-14 md:left-1/2 md:transform md:-translate-x-1/2 md:w-1/3  rounded-md border border-gray-700 " />
                        </Transition>

                        <Taskabar class="md:absolute md:w-full md:bottom-0  backdrop-blur-xl  "/>
                </div>
            </Transition>


    </div>
</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0 ;
}

.fade-in-enter-active, .fade-in-leave-active {
  @apply transition-opacity duration-700 ease-in-out;
}
.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  @apply transition-transform duration-700 ease-out;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(-100%);
}


</style>
