import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'

export default createStore({
  modules: {
    cart
  },
  strict: 'debug',
  plugins: [createLogger()],
  state() {
    return {
      rootData: 'rootData'
    }
  }
})
