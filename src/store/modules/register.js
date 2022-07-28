import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
  state: {
    token: ''
  },
  getters: {
    getToken(state) {
      return state.token;
    },

  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },


  },
  actions: {
    async userRegister({ commit }, formdata) {

      // var object = {};
      // formdata.forEach((value, key) => object[key] = value);
      // var jsonFormData = JSON.stringify(object);

      await axios
        .post(
          BASE_URL + "/auth/register",
          {
            firstName: formdata.firstName,
            lastName: formdata.surname,
            email: formdata.email,
            password: formdata.password,
            phone: formdata.phoneNumber,
            role: "USER"
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          console.log(res)
          commit("setToken", res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },

}


