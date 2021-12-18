export default {
  ageMultipleByTwo(state) {
    return state.age * 2;
  },
  isUserAuthNow(state) {
    if (state.isUserAuth) return 'login';
    else return 'logout';
  },
};
