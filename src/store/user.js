/**
 * Created by soga on 2017/6/21.
 */

import lowdb from 'lowdb';
const db = lowdb('db');

const user = {};

db.defaults({
  user
}).write();

export const TYPES = {
  SET_USER: 'user/SET_USER',
  USER_LOGIN: 'user/USER_LOGIN',
  USER_LOGOUT: 'user/USER_LOGOUT'
};

export const userState = {
  state: {
    user: {
      email: null,
      isLogin: false
    }
  },
  actions: {
    loadUser(context) {
      const user = db.get('user').value();
      context.commit(TYPES.SET_USER, user);
    }
  },
  mutations: {
    [TYPES.SET_USER](state, user) {
      state.user = user;
    },
    [TYPES.USER_LOGIN](state, user) {
      state.user = user;
      db.set('user.email', user.email).write();
      db.set('user.isLogin', true).write();
    },
    [TYPES.USER_LOGOUT](state) {
      state.user.isLogin = false;
      db.set('user.isLogin', false).write();
    }
  },
  getters: {}
};
