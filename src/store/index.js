import { createStore } from "vuex";

export default createStore({
  state: {
    isNavActive: false,
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
