<template>
  <div>
    <Hero />
    <!-- <h1 class="text-3xl">about page</h1>
    <button @click="changeLists">click!</button>
    <button @click="changeState">state강제변환!</button>
    <Chat />
    <ul>
      <li v-for="list in lists" :key="list.no">
        {{ list.name }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Hero from '@/components/layout/Hero'

export default defineComponent({
  components: {
    Hero
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
