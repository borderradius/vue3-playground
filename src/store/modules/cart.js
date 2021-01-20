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
  cartProducts: state => {
    return state.items
  }
}

const actions = {
  async getProducts({ commit, rootState }) {
    const products = await shop.getProducts()
    commit('setProductLists', products)
  }
}
const mutations = {
  setProductLists(state, products = []) {
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
