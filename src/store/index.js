import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    levelMap: {},
    changedFields: {},
    moveDirection: {}
  },
  getters: {
    levelMap: currentState => {
      return currentState.levelMap;
    },
    changedFields: currentState => {
      return currentState.changedFields;
    },
    moveDirection: currentState => {
      return currentState.moveDirection;
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
        commit("moveDirection", moveDirection);
        console.log("Commit " + moveDirection);
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
    },
    moveDirection(state, moveDirection) {
      console.log("Mutation " + moveDirection);
      state.moveDirection = moveDirection;
    }
  }
});
