/**
 * Created by soga on 2017/6/21.
 */

export const TYPES = {
    OPEN_INFO: 'APP/OPEN_INFO',
    CLOSE_INFO: 'APP/CLOSE_INFO',
    UPDATE_USERINFO: 'APP/UPDATE_USERINFO'
};

export const appState = {
    state: {
        info: {
            show: false,
            msg: '',
            style: ''
        },
        userInfo: {},
        menu: []
    },
    actions: {
        openInfo({commit}, data) {
            commit(TYPES.OPEN_INFO, data);
        },
        closeInfo({commit}) {
            commit(TYPES.CLOSE_INFO);
        },
        updateUserInfo({commit}, data) {
            commit(TYPES.UPDATE_USERINFO, data);
        }
    },
    mutations: {
        [TYPES.OPEN_INFO](state, data) {
            state.info = {
                show: true,
                msg: data.msg,
                style: data.style || 'success'
            }
        },
        [TYPES.CLOSE_INFO](state) {
            state.info = {
                show: false,
                msg: '',
                style: ''
            };
        },
        [TYPES.UPDATE_USERINFO](state, data) {
            state.menu = data.menus[1];
            delete data.menus;
            state.userInfo = data;
        }
    },
    getters: {}
};
