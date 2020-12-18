<template>
  <div>자식이 받은 props : {{ data }}</div>
  <button>자식의 이벤트</button>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Number
    }
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, { attrs, slots, emit }) {
    const state = reactive({});
    // attrs, non-reactive object
    // console.log(attrs);
    // slots, non-reactive object
    // console.log(slots);
    // emit events, method
    // console.log(emit);

    // computed
    /**
     * * computed
     */

    /**
     * * watch
     */

    // method
    // const sendParent = () => {
    //   emit("sendParent", "자식에서 준 데이터");
    // };

    // lift cycle

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped></style>
