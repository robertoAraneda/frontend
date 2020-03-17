import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user(state) {
      return state.user
    }
  },
  state: {
    user: null,
    token: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post('auth/register', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    login({ commit, dispatch }, credentials) {
      return axios.post('auth/login', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
        dispatch('attempt', data.token)
      })
    },
    attempt({ commit }, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }

      if (this.getters['authenticated'] === null) {
        return
      }

      try {
        axios.get('auth/me').then(response => {
          console.log(response.data)
          commit('SET_USER_DATA', response.data)
        })
      } catch (error) {
        commit('SET_TOKEN', null)
        commit('SET_USER_DATA', null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    }
  },
  modules: {}
})
