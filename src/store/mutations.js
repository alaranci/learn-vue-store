export default {
  changeName(state) {
    state.name = 'irlan';
  },
  // Bertambah 2 karena sebelumnya telah dijadikan getters ageMultipleByTwo()
  increaseAge(state) {
    state.age = state.age + 1;
  },
  userLogin(state) {
    state.isUserAuth = true;
  },
  userLogout(state) {
    state.isUserAuth = false;
  },
};
