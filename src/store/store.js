import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
    sidebarToggle: false,
  },
  mutations: {
    darkModeToggle: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode.toString());
      console.log(state.darkMode);
    },
    initializeDarkMode(state) {
      const darkModePreference = localStorage.getItem("darkMode");
      if (darkModePreference !== null) {
        state.darkMode = darkModePreference === "true";
      }
    },
    SIDEBAR_TOGGLE(state) {
      state.sidebarToggle = !state.sidebarToggle;
      console.log("sidebar toggle ", state.sidebarToggle);
    },
  },
  actions: {
    IS_DARKMODE({ commit }) {
      commit("darkModeToggle");
    },
    initializeDarkMode({ commit }) {
      commit("initializeDarkMode");
    },
  },
  getters: {
    isDarkMode(state) {
      return state.darkMode;
    },
  },
});
