import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      show: false,
    },
    favorite: {
      scholarships: []
    },
  },
  getters: {
  },
  mutations: {
    SET_MODAL: (state, payload) => {
      state.modal.show = payload;
    },
    SET_FAVORITE: (state, payload) => {
      state.favorite.scholarships = payload;
    },
  },
  actions: {
    setModal({ commit }, payload) {
      commit('SET_MODAL', payload);
    },
    setFavorite({ commit }, payload) {
      commit('SET_FAVORITE', payload);
    },
  },
  modules: {
  }
})
