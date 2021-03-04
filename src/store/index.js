import { createStore } from 'vuex'


export default createStore({
  state: {
    greeting: [
      {
        text: 'Hello 008 Vue.js',
        link: '',
      },
      {
        text: '123',
        link: 'http://www.google.com.tw'
      }
    ],
    close: false,
    serviceVisible: false,
  },
  mutations: {
    XButton ( state ) {
      state.close = !state.close
    },
    serviceAction (state) {
      // state.serviceVisible = !state.serviceVisible;

      if (state.serviceVisible) {
        state.serviceVisible = false;
      } else {
        state.serviceVisible = true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
