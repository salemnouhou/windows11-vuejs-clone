import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
  }),
  actions: {
    setUserName(username) {
      this.username = username;
    },
  },
});
