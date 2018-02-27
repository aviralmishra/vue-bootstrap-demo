import Vue from 'vue';

import fontawesome from '@fortawesome/fontawesome';
import {faComments} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faComments);

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
