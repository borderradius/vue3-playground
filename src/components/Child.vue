<template>
  <div>자식이 받은 props : {{ data }}</div>
  <button>자식의 이벤트</button>
  <p>provide하고 inject로 가져온 값: {{ providedData }}</p>
  <hr />
  <Child2 />
</template>

<script>
import { defineComponent, reactive, toRefs, inject } from 'vue'
import Child2 from '@/components/Child2.vue'

export default defineComponent({
  props: {
    data: {
      type: Number
    }
  },
  components: {
    Child2
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, { attrs, slots, emit }) {
    console.warn(props)
    const state = reactive({})
    // attrs, non-reactive object
    // console.log(attrs);
    // slots, non-reactive object
    // console.log(slots);
    // emit events, method
    // console.log(emit);

    const providedData = inject('location')

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
      ...toRefs(state),
      providedData
    }
  }
})
</script>

<style lang="scss" scoped></style>
