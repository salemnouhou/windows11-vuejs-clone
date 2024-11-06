import { onMounted, onUnmounted, ref } from 'vue';

export function useClickOutsideRight(callback) {
  const rightElementRef = ref(null);

  const handleClickOutsideRight = (event) => {
    if (rightElementRef.value && !rightElementRef.value.contains(event.target)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutsideRight);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutsideRight);
  });

  return {
    rightElementRef,
  };
}
