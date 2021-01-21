<template>
  <div />
</template>

<script>
import { defineComponent, reactive, toRefs, onBeforeMount } from '@/vue-wrapper'

export default defineComponent({
  // eslint-disable-next-line no-unused-vars
  setup(prop, { attribute, slots, emit }) {
    console.log('[LIFECYCLE] beforeCreate, created')
    const state = reactive({})

    /**
     * * computed----------------------------------------
     */

    /**
     * * life cycle----------------------------------------
     */
    onBeforeMount(() => {
      console.log('[LIFECYCLE] beforeMount')
    })

    onMounted(() => {
      console.log('[LIFECYCLE] mounted')
    })

    onBeforeUpdate(() => {
      console.log('[LIFECYCLE] beforeUpdate')
    })

    onUpdated(() => {
      console.log('[LIFECYCLE] updated')
    })

    onBeforeUnmount(() => {
      console.log('[LIFECYCLE] beforeDestroy')
    })

    onUnmounted(() => {
      console.log('[LIFECYCLE] destroyed')
    })

    /**
     * * method----------------------------------------
     */

    /**
     * * watch----------------------------------------
     */

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped></style>
