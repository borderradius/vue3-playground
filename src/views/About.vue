<template>
  <div>
    <h1>about page</h1>
    <button @click="changeLists">click!</button>
    <button @click="changeState">state강제변환!</button>
    <Chat />
    <ul>
      <li v-for="list in lists" :key="list.no">
        {{ list.name }}
      </li>
    </ul>
    <!-- <div id="target">{{ common }}</div> -->
    <!-- {{ common2 }} -->
  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Chat from '@/components/chat.vue'

export default defineComponent({
  components: {
    Chat
  },
  setup(prop, { attribute, slots, emit }) {
    const state = reactive({
      lists: []
    })
    const store = useStore()

    store.dispatch('cart/getProducts')

    /**
     * * computed
     */
    state.lists = computed(() => {
      return store.getters['cart/cartProducts']
    })

    /**
     * * method
     */
    const changeLists = () => {
      store.commit('cart/setProducts', [{ name: 'haha' }])
    }

    const changeState = () => {
      store.state.cart.items = 111
    }

    /**
     * * watch
     */

    /**
     * * life cycle
     */

    return {
      ...toRefs(state),
      changeLists,
      changeState
    }
  }
})
</script>

<style lang="scss" scoped></style>
