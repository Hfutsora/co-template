const user = {
  state: {
    username: '',
  },
  mutations: {
    INIT_USERNAME(state, username) {
      state.currentUser = username;
    },
  },
  actions: {
    ChangeUsername({ commit }, username) {
      commit('INIT_USERNAME', username);
    },
  },
};

export default user;
