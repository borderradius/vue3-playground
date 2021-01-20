<template>
  <div></div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance
} from "@/vue-wrapper";

export default defineComponent({
  // eslint-disable-next-line no-unused-vars
  setup(prop, { attrs, slots, emit }) {
    console.log("[LIFECYCLE] beforeCreate, created");
    const state = reactive({
      prop1: 1,
      prop2: 2
    });
    // getCurrentInstance only works during setup or Lifecycle Hooks
    const currentInstance = getCurrentInstance();
    currentInstance.appContext.config.globalProperties; // access to globalProperties

    /**
     * * computed----------------------------------------
     */

    /**
     * * life cycle----------------------------------------
     */
    // onBeforeMount(() => {
    //   console.log("[LIFECYCLE] beforeMount");
    // });

    // onMounted(() => {
    //   console.log("[LIFECYCLE] mounted");
    // });

    // onBeforeUpdate(() => {
    //   console.log("[LIFECYCLE] beforeUpdate");
    // });

    // onUpdated(() => {
    //   console.log("[LIFECYCLE] updated");
    // });

    // onBeforeUnmount(() => {
    //   console.log("[LIFECYCLE] beforeDestroy");
    // });

    // onUnmounted(() => {
    //   console.log("[LIFECYCLE] destroyed");
    // });

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
