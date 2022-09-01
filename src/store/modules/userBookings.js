import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
    state: {
        bookings: [],

    },
    getters: {
        getUserBookings(state) {
            return state.bookings;
        },

    },
    mutations: {
        setUserBookings(state, data) {
            state.bookings = data;
        },


    },
    actions: {
        async fetchUserBookings({ commit }) {
            let token = localStorage.getItem("token")
            await axios.get(BASE_URL + '/bookings', {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "*",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((res) => {

                    commit("setUserBookings", res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
}