function initialState() {
  const state = {
    currProjet: {}
  };
  return state;
}

const state = initialState();

const getters = {};

const mutations = {
  SET_CURR_PROJET: (state, value) => {
    state.currProjet = value;
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
