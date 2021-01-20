<template>
  <div class="bg-black h-32 p-8 flex justify-around">
    <div class="text-white text-4xl">Composition API Blog</div>
    <div class="text-white text-xl">
      <router-link to="/home2">Home</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  // eslint-disable-next-line no-unused-vars
  setup(prop, { attribute, slots, emit }) {
    const state = reactive({});

    /**
     * * computed----------------------------------------
     */

    /**
     * * life cycle----------------------------------------
     */

    /**
     * * method----------------------------------------
     */

    /**
     * * watch----------------------------------------
     */

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped></style>
