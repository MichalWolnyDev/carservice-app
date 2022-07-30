import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
  state: {
    garages: [],
    chosenGarage: []
  },
  getters: {
    getGarages(state) {
      return state.garages;
    },
    getChosenGarage(state) {
      return state.chosenGarage;
    },
  },
  mutations: {
    setGarageList(state, data) {
      state.garages = data;
    },
    setChosenGarage(state, data) {
      state.chosenGarage = data;
    },

  },
  actions: {
    async fetchGarages({ commit }) {
      console.log(BASE_URL)
      await axios.get(BASE_URL + '/garages', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((res) => {

          commit("setGarageList", res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    chooseGarage({ commit }, data) {
      commit("setChosenGarage", data)
    },
    clearGarage({ commit }) {
      commit("setChosenGarage", [])
    }
  },
}