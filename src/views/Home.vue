<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ obj.prop }}</p>
    <p>{{ arr }}</p>
    <p>카운트 더블! : {{ countIncreased }}</p>
    <button @click="increaseCount">카운트증가</button>
    <button @click="addArray">배열추가</button>
    <hr />
    <Child :data="count" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed, watch } from "vue";
import Child from "@/components/Child.vue";

export default {
  components: {
    Child
  },
  emits: ["sendParent"],
  setup() {
    const state = reactive({
      count: 0,
      obj: {
        prop: "obj-prop"
      },
      arr: ["arr"]
    });

    // const cnt = ref(0);

    // computed
    const countIncreased = computed(() => state.count * 2);

    // watch
    watch(state, (newValue, oldValue) => {
      console.log(
        `카운터 바뀐거 watch로 확인, oldValue: ${oldValue.count}, newValue: ${newValue.count}`
      );
    });

    // method
    const increaseCount = () => state.count++;
    const addArray = () => {
      state.arr = new Array(state.count);
    };

    // life cycle
    // onMounted(() => console.log("onMounted"));
    // onUPdated(() => // attrs, slots변경시 이 훅에서 작업.)

    return {
      ...toRefs(state),
      onMounted,
      countIncreased,
      increaseCount,
      addArray
    };
  }
};
</script>

<style lang="scss" scoped></style>
