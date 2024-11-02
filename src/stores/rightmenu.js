import { defineStore } from 'pinia'

export const useRightMenuStore = defineStore('rightmenu', {
  state: () => ({
    isActive: false,
  }),
  actions: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
});
