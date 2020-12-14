import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataDump: [],
    currentId: null
  },
  mutations: {
    fetchData(state, payload) {
      state.dataDump = payload;
    },
    setId(state, payload) {
      state.currentId = payload;
    }
  },
  actions: {},
  modules: {}
});
