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
      size: 200
    },
    defaultParams: {
      page: 0,
      size: 200
    },
    ownedGarageInfo: [],
    ownedGarages: [],
    employees: [],
    isGarageAdded: false
  },
  getters: {
    getGarages(state) {
      return state.garages;
    },
    getChosenGarage(state) {
      return state.chosenGarage;
    },
    getGarageAdded(state){
      return state.isGarageAdded;
    },
    getOwnedGarages(state){
      return state.ownedGarages;
    },
    getEmployees(state){
      return state.employees;
    }
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
    setOwnedGarageInfo(state, data){
      state.ownedGarageInfo = data
    },
    setGarageAdded(state, data){
      state.isGarageAdded = data
    },
    setOwnedGarages(state, data){
      state.ownedGarages = data
    },
    setEmployees(state, data){
      state.employees = data
    }

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
    async addOwnedGarage({commit}, payload) {
      let token = localStorage.getItem("token")
      console.log(payload)
      await axios
        .post(
          BASE_URL + "/garages",
          {
            name: payload.name,
            cityId: payload.cityId,
            address: payload.address,
            postCode: payload.postCode,
            services: payload.selectedServices,
            hoursWeek: payload.hoursWeek,
            hoursSaturday: payload.hoursSaturday,
            horusSunday: payload.hoursSunday,
            mapURL: payload.mapURL,
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            console.log('warsztat dodany')
            commit("setGarageAdded", true)
            commit("setOwnedGarageInfo", res.data)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchOwnedGarages({ commit }) {
      let token = localStorage.getItem("token")
      await axios.get(BASE_URL + '/garages/owned', {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "*",
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => {

          commit("setOwnedGarages", res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchEmployees({ commit }, payload) {
      console.log(payload)
      let token = localStorage.getItem("token")
      await axios.get(BASE_URL + '/garages/owned/mechanics', {
        params: {
          garageId: payload
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "*",
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => {

          commit("setEmployees", res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setParam({ commit, state }, param) {

      var tempParams = {
        ...state.params,
        [param.key]: param.value
      }

      commit("setParams", tempParams)
    },
    resetParams({ commit, state }) {
      commit("setParams", state.defaultParams)
    },
    chooseGarage({ commit }, data) {
      commit("setChosenGarage", data)
    },
    clearGarage({ commit }) {
      commit("setChosenGarage", [])
    },
    garageAdded({ commit }, data) {
      commit("setGarageAdded", data)
    },
  },
}