import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      name: null,
      email: null,
      password: null,
      region: null
    }
  },

  mutations: {
    setName (state, name) {
      state.name = name
    },

    setEmail (state, email) {
      state.email = email
    },

    setPassword (state, password) {
      state.password = password
    },

    setRegion (state, region) {
      state.region = region
    }
  },

  actions: {}
})

export default store