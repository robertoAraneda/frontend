import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('token', JSON.stringify(userData.access_token))
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.access_token}`
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post('//localhost:8000/api/auth/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    login({ commit }, credentials) {
      return axios
        .post('//localhost:8000/api/auth/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    }
  },
  modules: {}
})
