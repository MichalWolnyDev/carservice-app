import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import garages from './modules/garages'
import register from './modules/register'
import login from './modules/login'
import user from './modules/user'
import cities from './modules/cities'
import dictionary from './modules/dictionary'


const store = new Vuex.Store({
  
  modules: {
    garages,
    register,
    login,
    user,
    cities,
    dictionary
  }
})


export default store;

