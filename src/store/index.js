import { createStore } from 'vuex'

export default createStore({
  state: {
    info: []
  },
  getters: {
    getInfo: (state) => (id) => {
      return state.info.filter(data => data.idTarifa === id)
    }
  },
  mutations: {
    addInfo (state, value) {
      state.info = [...state.info, value]
    }
  },
  actions: {
  },
  modules: {
  }
})
