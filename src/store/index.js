import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import garages from './modules/garages'
import register from './modules/register'
import login from './modules/login'


const store = new Vuex.Store({
  
  modules: {
    garages,
    register,
    login
  }
})

store.dispatch('fetchGarages')


export default store;

