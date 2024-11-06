import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isActive: false,
    about : false,
  }),
  actions: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },

    activateMenu() {
      this.isActive = true;
    },

    disableMenu() {
      this.isActive = false;
    },
    
    showAbout(){
      this.about = !this.about
    },
    closeAbout() {
      this.about = false
    }
  },
});
