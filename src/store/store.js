import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    dataProducts: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Star', price: 80}
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.dataProducts.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePriceMutation: (state, payload) => {
      state.dataProducts.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePriceMutation', payload)
      }, 2000)
    }
  }
})
