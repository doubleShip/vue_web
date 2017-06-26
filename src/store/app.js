/**
 * Created by soga on 2017/6/21.
 */

export const TYPES = {
  OPEN_INFO: 'APP/OPEN_INFO',
  CLOSE_INFO: 'APP/CLOSE_INFO'
};

export const appState = {
  state: {
    info: {
      show: false,
      msg: '',
      style: ''
    }
  },
  actions: {
    openInfo({commit}, data) {
      commit(TYPES.OPEN_INFO, data);
    },
    closeInfo({commit}) {
      commit(TYPES.CLOSE_INFO);
    }
  },
  mutations: {
    [TYPES.OPEN_INFO](state, data) {
      state.info = {
        show: true,
        msg: data.msg,
        style: data.style || 'success'
      };
    },
    [TYPES.CLOSE_INFO](state) {
      state.info = {
        show: false,
        msg: '',
        style: ''
      };
    }
  },
  getters: {}
};
