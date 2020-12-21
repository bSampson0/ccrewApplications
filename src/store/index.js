import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataDump: [],
    currentId: null,
    loggedin: false
  },
  mutations: {
    fetchData(state, payload) {
      state.dataDump = payload;
    },
    setId(state, payload) {
      state.currentId = payload;
    },
    login(state) {
      state.loggedin = true;
    },
    logout(state) {
      state.loggedin = false;
    }
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    }
  },
  modules: {}
});
