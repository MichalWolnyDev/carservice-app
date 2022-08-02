import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const BASE_URL = process.env.VUE_APP_BASEURL



export default {
    state: {
        brands: [],
        models: [],
        gearbox: [
            {
                name: 'automatyczna',
                value: 0
            },
            {
                name: 'manualna',
                value: 1
            },
        ],
        bodyType: [
            {
                name: 'coupe',
                value: 0
            },
            {
                name: 'kabriolet',
                value: 1
            },
            {
                name: 'kombi',
                value: 2
            },
            {
                name: 'kompakt',
                value: 3
            },
            {
                name: 'minivan',
                value: 4
            },
            {
                name: 'sedan',
                value: 5
            },
            {
                name: 'SUV',
                value: 6
            },
        ]
    },
    getters: {
        getGearbox(state) {
            return state.gearbox;
        },
        getBodyType(state) {
            return state.bodyType;
        },
        getBrands(state) {
            return state.brands;
        },
        getModels(state) {
            return state.models;
        },
        
    },
    mutations: {
        setBrands(state, data) {
            state.brands = data;
          },
        setModels(state, data) {
            state.models = data;
          },

    },
    actions: {
        async fetchBrands({ commit }) {
            await axios.get(BASE_URL + '/cars/makes')
              .then((res) => {
      
                commit("setBrands", res.data)
              })
              .catch((err) => {
                console.log(err);
              });
          },
        async fetchModels({ commit }, brand) {
            await axios.get(BASE_URL + `/cars/makes/${brand}/models`)
              .then((res) => {
      
                commit("setModels", res.data)
              })
              .catch((err) => {
                console.log(err);
              });
          },
    },
}