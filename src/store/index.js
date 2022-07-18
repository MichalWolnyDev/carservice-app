import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


const store = new Vuex.Store({
  state: {
    garages: []
  },
  getters: {
    getGarages(state) {
      return state.garages;
    },
  },
  mutations: {
    setGarageList(state, data) {
      state.garages = data;
    },

  },
  actions: {
    async fetchGarages({commit}) {
      console.log(BASE_URL)
      await axios.get(BASE_URL + '/garages')
        .then((res) => {
          
          commit("setGarageList",  res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  }
})

store.dispatch('fetchGarages')


export default store;

