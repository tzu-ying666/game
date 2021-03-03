import { createStore } from 'vuex'


export default createStore({
  state: {
    greeting: 'Hello 008 Vue.js',
    close: false
  },
  mutations: {
    XButton ( state ) {
      state.close = !state.close
      }
  },
  actions: {
  },
  modules: {
  }
})
