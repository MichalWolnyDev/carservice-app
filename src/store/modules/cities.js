import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL


export default {
    state: {
        cities: []
    },
    getters: {
        getCities(state) {
            return state.cities;
        }
    },
    mutations: {
        setCitiesList(state, data) {
            state.cities = data;
        },

    },
    actions: {
        async fetchCities({ commit }) {
            await axios.get(BASE_URL + '/cities', {
                params: {
                    page: 0,
                    size: 200
                }
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "*"
                }
            })
                .then((res) => {

                    commit("setCitiesList", res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
}