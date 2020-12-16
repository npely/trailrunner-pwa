import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    levelMap: {}
  },
  getters: {
    levelMap: currentState => {
      return currentState.levelMap;
    }
  },
  actions: {
    async fetchLevel({ commit }, { levelId }) {
      console.log(levelId);
      console.log(process.env.VUE_APP_BACKEND_BASE_URL);
      await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/level/" + levelId, {
        method: "GET",
        credentials: "same-origin"
      });
      await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/levelMap", {
        method: "GET",
        credentials: "same-origin"
      }).then(async function(response) {
        const levelMap = await response.json();
        console.log(levelMap);
        commit("levelMap", levelMap);
      });
    }
  },
  mutations: {
    levelMap(state, levelMap) {
      state.levelMap = levelMap;
    }
  }
});
