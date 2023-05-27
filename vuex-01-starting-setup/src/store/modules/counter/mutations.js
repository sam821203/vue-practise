export default {
  increment(state) {
    state.counter += 2;
  },
  increase(state, payload) {
    state.counter += payload.value;
  },
}