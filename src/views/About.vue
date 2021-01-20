<template>
  <div>
    <h1>about page</h1>
    <button @click="changeLists">click!</button>
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

export default defineComponent({
  // eslint-disable-next-line no-unused-vars
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
      store.commit('cart/setProductLists', [{ name: 'haha' }])
    }

    /**
     * * watch
     */

    /**
     * * life cycle
     */

    return {
      ...toRefs(state),
      changeLists
    }
  }
})
</script>

<style lang="scss" scoped></style>
