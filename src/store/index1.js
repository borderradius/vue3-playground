import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      commonData: 0,
      lists: [],
      covid: {}
    };
  },
  getters: {
    getCommonData(state) {
      return state.commonData;
    },
    getLists(state) {
      return state.lists;
    },
    getCovid(state) {
      return state.covid;
    }
  },
  mutations: {
    SET_COMMON_DATA(state, payload) {
      state.commonData = payload;
    },
    SET_LISTS(state, payload) {
      state.lists = payload;
    },
    SET_COVID(state, payload) {
      state.covid = payload;
    },
    DECREASE_LISTS(state, payload) {
      state.lists = payload;
    }
  },
  actions: {
    setCommonData({ commit }, params) {
      commit("SET_COMMON_DATA", params);
    },
    async setLists({ commit }, params) {
      const { data } = await axios.get(
        "http://sample.bmaster.kro.kr/contacts",
        {
          params
        }
      );
      // console.warn(data.contacts);
      commit("SET_LISTS", data.contacts);
    },
    async setCovid({ commit }, params) {
      const { data } = await axios.get(
        "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
        {
          params
        }
      );
      commit("SET_COVID", data.contacts);
    }
  },
  modules: {}
});
