<template>
  <div>inject값 자식의 자식에서 받아지나? {{ injectValue }}</div>
</template>

<script>
import { defineComponent, reactive, toRefs, inject } from "vue";

export default defineComponent({
  // eslint-disable-next-line no-unused-vars
  setup(prop, { attribute, slots, emit }) {
    const state = reactive({});
    const injectValue = inject("location");
    /**
     * * computed
     */

    /**
     * * life cycle
     */

    /**
     * * method
     */

    /**
     * * watch
     */

    return {
      ...toRefs(state),
      injectValue
    };
  }
});
</script>

<style lang="scss" scoped></style>
