import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { userState } from './user';
import { appState } from './app';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userState,
    appState
  },
  plugins: [createLogger()]
});
