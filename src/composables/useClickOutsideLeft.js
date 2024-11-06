import { onMounted, onUnmounted, ref } from 'vue';

export function useClickOutsideLeft(callback) {
  const leftElementRef = ref(null);

  const handleClickOutsideLeft = (event) => {
    if (leftElementRef.value && !leftElementRef.value.contains(event.target)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutsideLeft);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutsideLeft);
  });

  return {
    leftElementRef,
  };
}
