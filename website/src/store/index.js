import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      show: true,
    }
  },
  getters: {
  },
  mutations: {
    SET_MODAL: (state, payload) => {
      state.modal.show = payload;
    }
  },
  actions: {
    setModal({ commit }, payload) {
      commit('SET_MODAL', payload);
    }
  },
  modules: {
  }
})
