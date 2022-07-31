import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
  state: {
    userInfo: [],
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },

  },
  actions: {
    async fetchUserInfo({ commit }) {
      var token = localStorage.getItem('token');
      if (token != '') {
        await axios.get(BASE_URL + '/@me', {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Authorization": `Bearer ${token}`
          }
        })
          .then((res) => {

            commit("setUserInfo", res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }

    },
    resetUserInfo({ commit }) {
      commit("setUserInfo", [])
    }

  },
}