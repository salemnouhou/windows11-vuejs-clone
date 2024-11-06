import { defineStore } from 'pinia'

export const useleftMenuStore = defineStore('leftmenu', {
  state: () => ({
    isActive: false,
  }),
  actions: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    disableLeftMenu() {
      this.isActive = false;
    },
  },
});
