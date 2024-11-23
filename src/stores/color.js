import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {
  state: () => ({
   currentColor: 'default',
  }),
  actions: {
    toggleColor(color) {
      // console.log(this.currentColor);

      this.currentColor = color;
    },
  },
});
