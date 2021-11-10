import activites from '@/data/activite';

function initialState() {
  const state = {
    activites,
    idCurrActivite: 0
  };
  return state;
}

const state = initialState();

const getters = {
  liste: state => state.activites.map(el => ({
    id: el.id,
    icon: el.icon,
    title: el.title,
  })),
  currActivite: state => state.activites.find(el => el.id === state.idCurrActivite)
};

const mutations = {
  ID_CURR_ACTIVITE: (state, value) => {
    state.idCurrActivite = value;
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
