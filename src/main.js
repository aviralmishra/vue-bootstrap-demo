import Vue from 'vue';
import App from './App.vue';

import fontawesome from '@fortawesome/fontawesome';
import {faComments, faFile} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faComments, faFile);

new Vue({
  el: '#app',
  render: h => h(App)
});
