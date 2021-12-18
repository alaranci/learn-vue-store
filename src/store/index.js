import { createStore } from 'vuex';
import rootMutations from './mutations';
// import rootActions from './actions'; // Masih tidak tersedia
import rootGetters from './getters';
import { moduleArgan } from './moduleArgan/index';
import { moduleIrlan } from './moduleIrlan/index';

export const store = createStore({
  state() {
    return {
      name: 'irlan navila',
      age: 19,
      isUserAuth: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  modules: {
    irlan: moduleIrlan,
    argan: moduleArgan,
  },
});
