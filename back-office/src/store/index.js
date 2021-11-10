import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Auth } from '@/api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, val) {
      state.user = val
    }
  },
  actions: {
    async login ({ commit }, infoUser) {
      const user = (await Auth(infoUser.email, infoUser.password)).data
      commit('SET_USER', user)
    },
    logout ({ commit }) {
      commit('SET_USER', null)
    }
  },
  getters: {
    token: (state) => state.user ? state.user.token : null
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      key: 'dash-asns',
      paths: ['user']
    })
  ]
})
