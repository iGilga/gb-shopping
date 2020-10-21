import Vue from 'vue';
import Vuex from 'vuex';
import goods from './goods';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    goods,
  },
});
