import { createStore } from 'vuex'


export default createStore({
  state: {
    greeting: 'Hello 008 Vue.js',
    close: false
  },
  mutations: {
    XButton () {
      this.close = !this.close;
    }
  },
  actions: {
  },
  modules: {
  }
})
