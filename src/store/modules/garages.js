import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
  state: {
    garages: [],
    chosenGarage: [],
    params: {
      page: 0,
      size: 20
    },
    defaultParams: {
      page: 0,
      size: 20
    }
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
    setParams(state, data) {
      state.params = data;
    },

  },
  actions: {
    async fetchGarages({ commit, state }) {
      await axios.get(BASE_URL + '/garages', {
        params: state.params
      }, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "*"
        }
      })
        .then((res) => {

          commit("setGarageList", res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setParam({ commit, state }, param){

      var tempParams = {
        ...state.params,
        [param.key]: param.value
      }

      commit("setParams", tempParams)
    },
    resetParams({commit, state}) {
      commit("setParams", state.defaultParams)
    },
    chooseGarage({ commit }, data) {
      commit("setChosenGarage", data)
    },
    clearGarage({ commit }) {
      commit("setChosenGarage", [])
    }
  },
}