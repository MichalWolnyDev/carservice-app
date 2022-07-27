import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../../router/index.js";

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
  state: {
    token: ''
  },
  getters: {
    getLoginToken(state) {
      return state.token;
    },

  },
  mutations: {
    setLoginToken(state, data) {
      state.token = data;
    },


  },
  actions: {
    async userLogin({ commit }, formdata) {

      // var object = {};
      // formdata.forEach((value, key) => object[key] = value);
      // var jsonFormData = JSON.stringify(object);

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
              "Access-Control-Allow-Credentials": true
            },
          }
        )
        .then((res) => {
          console.log(res)
        //   console.log(this.$axios.defaults.headers.common['Authorization'])

          commit("setLoginToken", res.data)
          localStorage.setItem('token', res.data.token)
          router.push('/')
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },

}



