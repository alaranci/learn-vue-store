import irlanMutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      name: 'irlan',
    };
  },
  mutations: irlanMutations,
};
