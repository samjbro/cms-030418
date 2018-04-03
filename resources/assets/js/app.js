import Vue from 'vue';
import moment from 'moment';
import {VirtualScroller} from 'vue-virtual-scroller';
window.Vue = Vue;
window.moment = moment;

import {event} from '@/services';
import App from '@/components/App';
Vue.component('virtual-scroller', VirtualScroller);

new Vue({
    el: '#root',
    components: {App},
    template: '<App/>',
    created() {
        event.init();
    }
});