import { createStore } from "vuex";

export default createStore({
  state: {
    isClicked: false,
    sidebarToggle: false,
  },
  mutations: {
    toggle: (state) => {
      state.isClicked = !state.isClicked;
      console.log(state.isClicked);
    },
    SIDEBAR_TOGGLE(state) {
      state.sidebarToggle = !state.sidebarToggle;
      console.log("sidebar toggle ", state.sidebarToggle);
    },
  },
  actions: {
    IS_CLICKED({ commit }) {
      commit("toggle");
    },
  },
  getters: {
    isClicked(state) {
      return state.isClicked;
    },
  },
});
