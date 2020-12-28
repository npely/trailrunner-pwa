import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    levelMap: {},
    changedFields: {}
  },
  getters: {
    levelMap: currentState => {
      return currentState.levelMap;
    },
    changedFields: currentState => {
      return currentState.changedFields;
    }
  },
  actions: {
    async fetchLevel({ commit }, { levelId }) {
      await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/level/" + levelId, {
        method: "GET",
        credentials: "same-origin"
      });
      await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/levelMap", {
        method: "GET",
        credentials: "same-origin"
      }).then(async function(response) {
        const levelMap = await response.json();
        commit("levelMap", levelMap);
      });
    },
    async makeMove({ commit }, { moveDirection }) {
      await fetch(
        process.env.VUE_APP_BACKEND_BASE_URL + "/move/" + moveDirection,
        {
          method: "GET",
          credentials: "same-origin"
        }
      );
      await fetch(
        process.env.VUE_APP_BACKEND_BASE_URL +
          "/changedFields/" +
          moveDirection,
        {
          method: "GET",
          credentials: "same-origin"
        }
      ).then(async function(response) {
        const changedFields = await response.json();
        commit("changedFields", changedFields);
      });
    }
  },
  mutations: {
    levelMap(state, levelMap) {
      state.levelMap = levelMap;
    },
    changedFields(state, changedFields) {
      state.changedFields = changedFields;
    }
  }
});
