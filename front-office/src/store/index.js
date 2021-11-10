import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import activite from './modules/activite';
import projets from './modules/projets';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    activite,
    projets
  },
  plugins: [createPersistedState({
    key: 'asns',
    paths: ['projets.currProjet', 'activite.idCurrActivite']
  })],
  namespaced: true
})
