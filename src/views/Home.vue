<template>
  <div>
    <section id="section-0" class="section">
      <h1>섹션1</h1>
      <div class="sticky">
        이건 포지션 sticky 엘리먼트111
      </div>
      <div class="sticky">
        이건 포지션 sticky 엘리먼트222
      </div>
      <div class="sticky">
        이건 포지션 sticky 엘리먼트333
      </div>
    </section>
    <section id="section-1" class="section">
      <h1>섹션2</h1>
      <div class="sticky">
        section 2 sticky 111
      </div>
      <div class="sticky">
        section 2 sticky 222
      </div>
      <div class="sticky">
        section 2 sticky 333
      </div>
    </section>
    <section id="section-2" class="section">
      <h1>섹션3</h1>
    </section>
    <section id="section-3" class="section">
      <h1>섹션4</h1>
    </section>
    <!-- <p>{{ count }}</p>
    <p>{{ obj.prop }}</p>
    <p>{{ arr }}</p>
    <p>카운트 더블! : {{ countIncreased }}</p>
    <button @click="increaseCount">카운트증가</button>
    <button @click="addArray">배열추가</button>
    <hr />
    <input v-model="location" />
    <Child :data="count" />
    <teleport to="#target">
      <h1>텔레포트 안쪽</h1>
    </teleport> -->
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed, watch, provide, ref } from 'vue'
// import Child from "@/components/Child.vue";

export default {
  // components: {
  //   Child
  // },
  emits: ['sendParent'],
  setup() {
    const state = reactive({
      count: 0,
      obj: {
        prop: 'obj-prop'
      },
      arr: ['arr'],
      sceneInfo: []
    })

    let yOffset = 0 // window.pageYOffset 값 넣은 변수
    let prevScrollHeight = 0 // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0 // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)

    const location = ref('seoul')
    provide('location', location)

    // const cnt = ref(0);

    /**
     * * computed----------------------------------------
     */
    const countIncreased = computed(() => state.count * 2)

    /**
     * * watch----------------------------------------
     */
    // eslint-disable-next-line no-unused-vars
    watch(state, (newValue, oldValue) => {
      // console.log(
      //   `카운터 바뀐거 watch로 확인, oldValue: ${oldValue.count}, newValue: ${newValue.count}`
      // );
    })

    /**
     * * method----------------------------------------
     */
    const increaseCount = () => state.count++
    const addArray = () => {
      state.arr = new Array(state.count)
    }
    // scene 정보 기본설정
    const getSceneInfo = function() {
      state.sceneInfo = [
        {
          type: 'sticky',
          heightNum: 5,
          scrollHeight: 0,
          objs: {
            container: ''
          }
        },
        {
          type: 'normal',
          heightNum: 5,
          scrollHeight: 0,
          objs: {
            container: ''
          }
        },
        {
          type: 'sticky',
          heightNum: 5,
          scrollHeight: 0,
          objs: {
            container: ''
          }
        },
        {
          type: 'sticky',
          heightNum: 5,
          scrollHeight: 0,
          objs: {
            container: ''
          }
        }
      ]
    }
    getSceneInfo()
    console.log(state.sceneInfo)
    // 컨테이너로 지정한 섹션들 높이값 설정
    const setLayout = () => {
      for (let i = 0; i < state.sceneInfo.length; i++) {
        state.sceneInfo[i].scrollHeight =
          state.sceneInfo[i].heightNum * window.innerHeight
        state.sceneInfo[
          i
        ].objs.container.style.height = `${state.sceneInfo[i].scrollHeight}px`
      }
    }
    // 스크롤 시 동작하는 함수
    const scrollLoop = () => {
      prevScrollHeight = 0
      for (let i = 0; i < currentScene; i++) {
        prevScrollHeight += state.sceneInfo[i].scrollHeight
      }
      if (
        yOffset >
        prevScrollHeight + state.sceneInfo[currentScene].scrollHeight
      ) {
        currentScene++
      }
      if (yOffset < prevScrollHeight) {
        if (!currentScene) return
        currentScene--
      }

      document.body.setAttribute('id', `show-scene-${currentScene}`)

      console.log(currentScene)
    }

    /**
     * * life cycle----------------------------------------
     */
    onMounted(() => {
      console.warn('onMounted started')

      // section 가져와서 컨테이너로 설정
      const sectionArr = document.getElementsByClassName('section')
      state.sceneInfo.forEach((scene, i) => {
        scene.objs.container = sectionArr[i]
      })

      // setLayout();

      window.addEventListener('resize', setLayout)
      window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset
        // console.log(yOffset);
        scrollLoop()
      })
      window.addEventListener('load', setLayout)
      window.addEventListener('resize', setLayout)
    })
    // onUpdated(() => // attrs, slots변경시 이 훅에서 작업.)

    return {
      ...toRefs(state),
      countIncreased,
      increaseCount,
      addArray,
      location
    }
  }
}
</script>

<style lang="scss" scoped></style>
