// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from 'store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import router from './router';
import Layout from 'components/Layout';
import axios from 'lib/axios';
import * as uiv from 'uiv';
import VeeValidate from 'vee-validate';
import * as CONFIG from 'config';
// import cordova from './mobile-index'  // 打开此行代码的注释可以打 cordova 的包

Vue.use(uiv);
Vue.use(ElementUI);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

// 全局常量
Vue.prototype.CONFIG = CONFIG;

// icons
import 'vue-awesome/icons/volume-up';
import 'vue-awesome/icons/star-o';
import Icon from 'vue-awesome/components/Icon';

Vue.component('icon', Icon);

// cordova.onDeviceReady = () => {  // 打开此行代码的注释可以打 cordova 的包
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    axios,
    template: '<Layout/>',
    components: {
    Layout
    }
    //  render: h => h(App)
});
// }

// cordova.initialize() // 打开此行代码的注释可以打 cordova 的包
