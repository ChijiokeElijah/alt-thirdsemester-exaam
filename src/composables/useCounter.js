import { ref, computed } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  const counter = computed(() => store.state.counter);

  const increment = () => {
    store.commit("increment");
  };
  const decrement = () => {
    store.commit("decrement");
  };
  const inputValue = ref(null);

  const setValue = () => {
    store.commit("setValue", inputValue.value);
  };

  const reset = () => {
    store.commit("reset");
  };

  return {
    counter,
    inputValue,
    setValue,
    increment,
    decrement,
    reset,
  };
}
