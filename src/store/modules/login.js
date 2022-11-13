import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from "../../router/index.js";

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
  state: {
    token: '',
    loginError: {}
  },
  getters: {
    getLoginToken(state) {
      return state.token;
    },
    getLoginError(state) {
      return state.loginError;
    },

  },
  mutations: {
    setLoginToken(state, data) {
      state.token = data;
    },
    setLoginError(state, data) {
      state.loginError = data;
    },


  },
  actions: {
    async userLogin({ commit }, formdata) {

      await axios
        .post(
          BASE_URL + "/auth/login",
          {
            email: formdata.email,
            password: formdata.password
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type",
            }
          }
        )
        .then((res) => {
          console.log(res)

          commit("setLoginToken", res.data)
          localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
          console.log(err);
          commit("setLoginError", err.response)
        });
    },

  },

}



