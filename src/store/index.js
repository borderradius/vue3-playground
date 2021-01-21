import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'

export default createStore({
  modules: {
    cart
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createLogger()],
  state() {
    return {
      rootData: 'rootData'
    }
  }
})
