/**
 * * api call service import
 */
import shop from '../../api/shop'

const state = () => {
  return {
    items: []
  }
}

const getters = {
  // eslint-disable-next-line no-shadow
  cartProducts(state, getters, rootState) {
    return state.items
  }
}

const actions = {
  async getProducts({ commit, rootState }) {
    const products = await shop.getProducts()
    commit('setProducts', products)
  }
}
const mutations = {
  setProducts(state, products = []) {
    state.items = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
