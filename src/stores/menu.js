import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isActive: false,
    name : "Salem",
  }),
  actions: {
    toggleMenu() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
});
