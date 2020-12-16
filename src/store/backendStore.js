const state = {
  levelMap: {}
};

const getters = {
  levelMap: currentState => currentState.levelMap
};

const actions = {
  async fetchLevel({ commit }, { levelId }) {
    await fetch("http://localhost:9000/level/" + levelId, {
      method: "GET",
      credentials: "same-origin"
    });
    console.log("TEST");
    await fetch("http://localhost:9000/levelMap", {
      method: "GET",
      credentials: "same-origin"
    }).then(function(response) {
      commit("levelMap", response.body);
    });
  }
};

const mutations = {
  levelMap(state, levelMap) {
    state.levelMap = levelMap;
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
