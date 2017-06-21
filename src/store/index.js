import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { userState } from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userState
  },
  plugins: [createLogger()]
});
