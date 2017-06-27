/**
 * Created by soga on 2017/6/22.
 */
import Vue from 'vue';
import axios from 'axios';
import { Loading, Message } from 'element-ui';
const Promise = require('es6-promise').Promise;
// ajax请求过期时间，最长9秒，超时不候
axios.defaults.timeout = 9000;
//axios.defaults.withCredentials = true;

let loadingInstance = null;

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做某事
    config.isShowLoading && (loadingInstance = Loading.service({fullscreen: true, text: '加载中...'}));
    return config;
}, function(error) {
    // 请求错误时做些事
    loadingInstance && loadingInstance.close();
    Message({
        message: error,
        type: 'error',
        showClose: true
    });
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response,c) {
    // 对响应数据做些事
    loadingInstance && loadingInstance.close();
    if(!response.data.isSuccess) {
        Message({
            message: response.data['Msg'],
            type: 'error',
            showClose: true
        });
    }

    return response.data;
}, function(error,d) {
    // 请求错误时做些事
    console.log(error,d)
    loadingInstance && loadingInstance.close();
    Message({
        message: error,
        type: 'error',
        showClose: true
    });
    return Promise.reject(error);
});

// 将axios 放入到Vue的原型链中，所有的组件都可以使用
Vue.prototype.axios = axios;
