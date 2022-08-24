import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
    state: {
        userCars: [],

    },
    getters: {
        getUserCars(state) {
            return state.userCars;
        },

    },
    mutations: {
        setUserCars(state, data) {
            state.userCars = data;
        },


    },
    actions: {
        async fetchUserCars({ commit }) {
            let token = localStorage.getItem("token")
            await axios.get(BASE_URL + '/cars', {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "*",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((res) => {

                    commit("setUserCars", res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
}