import { createStore } from "vuex";

export default createStore({
  state: {
    isNavActive: true,
  },
  getters: {
    isNavActive(state) {
      return state.isNavActive;
    },
  },
  mutations: {
    toggleNav(state) {
      state.isNavActive = !state.isNavActive;
    },
  },
  actions: {},
  modules: {},
});
