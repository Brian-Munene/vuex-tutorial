import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue){
      state.colorCode = newValue
    }
  },
  actions: {
    decreaseCounter({ commit }){
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=9&count=1').then(response => {
        commit('decreaseCounter', response.data[0])
      })
    },
    increaseCounter({ commit }){
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=9&count=1').then(response => {
        commit('increaseCounter', response.data[0])
      })
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    },
    
  },
  getters:{
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
