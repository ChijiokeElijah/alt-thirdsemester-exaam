import { createStore } from "vuex";

const initialValue = 0;
const store = createStore({
  state: {
    counter: initialValue,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    setValue(state, payload) {
      state.counter = payload;
    },
    reset(state) {
      state.counter = initialValue;
    },
  },
});

export default store;
