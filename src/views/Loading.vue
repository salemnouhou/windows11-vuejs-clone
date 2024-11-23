<template>
  <div
    class="bg-zinc-800 inset-0 flex flex-col items-center justify-center bg-cover bg-center text-white"
    :style="{ backgroundImage: 'url(/path/to/your-screensaver-image.jpg)' }"
  >
    <div v-if="width < 980">
      <SmallScreen />
    </div>

    <div
      v-else
      class="h-screen flex flex-col gap-14 justify-center items-center"
    >
      <img class="w-96" src="/src/assets/images/windows.png" alt="" />
      <div class="text-red-800"></div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="3" r="0" fill="white">
            <animate
              id="svgSpinners6DotsScale0"
              fill="white"
              attributeName="r"
              begin="0;svgSpinners6DotsScale2.end-0.5s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="16.5" cy="4.21" r="0" fill="white">
            <animate
              id="svgSpinners6DotsScale1"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale0.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="7.5" cy="4.21" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale2"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale4.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="19.79" cy="7.5" r="0" fill="white">
            <animate
              id="svgSpinners6DotsScale3"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale1.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="4.21" cy="7.5" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale4"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale6.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="21" cy="12" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale5"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale3.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="3" cy="12" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale6"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale8.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="19.79" cy="16.5" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale7"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale5.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="4.21" cy="16.5" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale8"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScalea.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="16.5" cy="19.79" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScale9"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale7.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="7.5" cy="19.79" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScalea"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScaleb.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
          <circle cx="12" cy="21" r="0" fill="#888888">
            <animate
              id="svgSpinners6DotsScaleb"
              fill="freeze"
              attributeName="r"
              begin="svgSpinners6DotsScale9.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines="0,1,0,1;.53,0,.61,.73"
              keyTimes="0;.2;1"
              values="0;2;0"
            />
          </circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SmallScreen from "../components/SmallScreen.vue";

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

const updateDimensions = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onUnmounted(() => {
  window.removeEventListener("resize", updateDimensions);
});

onMounted(() => {
  window.addEventListener("resize", updateDimensions);

  setTimeout(() => {
    window.location.href = "/desktop";
  }, 5000);
});
</script>

<style scoped></style>
