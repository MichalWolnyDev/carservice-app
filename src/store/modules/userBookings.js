import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
    state: {
        bookings: [],
        serviceBookings: [],
        bookingTemp: ""

    },
    getters: {
        getUserBookings(state) {
            return state.bookings;
        },
        getServiceBookings(state) {
            return state.serviceBookings;
        },

    },
    mutations: {
        setUserBookings(state, data) {
            state.bookings = data;
        },
        setServiceBookings(state, data) {
            state.serviceBookings = data;
        },
        setBookingStatusTemp(state, data) {
            state.bookingTemp = data;
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
        },
        async fetchServiceBookings({ commit }, payload) {
            let token = localStorage.getItem("token")
            await axios.get(BASE_URL + '/bookings/' + payload, {

                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "*",
                    "Authorization": `Bearer ${token}`
                },

            })
                .then((res) => {
                    console.log(res)
                    commit("setServiceBookings", res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async changeBookingStatus({ commit }, payload) {
            let token = localStorage.getItem("token")
            console.log(payload)
            await axios
                .post(
                    BASE_URL + "/bookings/" + payload.id, {
                        status: payload.name
                },
                {
                    headers: { Authorization: `Bearer ${token}` },

                }

                )
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        console.log('status zaktualizowany')
                        commit("setBookingStatusTemp", res.data)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
}