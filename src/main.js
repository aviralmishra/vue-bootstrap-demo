import Vue from 'vue';
import App from './App.vue';

import fontawesome from '@fortawesome/fontawesome';
import {faFile} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faFile);

new Vue({
  el: '#app',
  render: h => h(App)
});
