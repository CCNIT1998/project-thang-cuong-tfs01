import api from '@/service/user.service';
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? user : '';
const state = {
  user: initialState,
  isLoginSuccess: false,
  loginMessage: '',
  isRegisterSuccess: false,
  registerMessage: '',
  isLoading: false,
};
const actions = {
  async login({ commit }, { email, password }) {
    commit('setLoading', true);
    try {
      const user = await api.login({ email, password });
      commit('setUser', user);
      commit('setLoginSuccess', true);
      commit('setLoginMessage', 'Login Success');
      commit('setLoading', false);
    } catch (e) {
      console.log(e);
      commit('setLoginSuccess', false);
      commit('setLoginMessage', e.response.data);
      commit('setLoading', false);
    }
  },
  async register({ commit }, user) {
    commit('setLoading', true);
    commit('setIsRegisterSuccess', false);
    try {
      await api.register(user);
      console.log("success")
      commit('setIsRegisterSuccess', true);
      commit('setRegisterMessage', "Register Success");
     
      commit('setLoading', false);
    } catch (e) {
      commit('setIsRegisterSuccess', false);
      commit('setRegisterMessage', e.response.data);
      commit('setLoading', false);
    }
  },
  async logout({ commit }) {
    try {
      await api.logout();
      commit('setUser', '');
      commit('setLoginSuccess', false);
    } catch (e) {
      console.log(e);
    }
  },
};
const mutations = {
  setUser(state, user) {
    state.user = user;
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  },
  setLoginSuccess(state, status) {
    state.isLoginSuccess = status;
  },
  setLoginMessage(state, message) {
    state.loginMessage = message;
  },
  setLoading(state, status) {
    state.isLoading = status;
  },
  setRegisterMessage(state, message) {
    state.registerMessage = message;
  },
  setIsRegisterSuccess(state, status) {
    state.isRegisterSuccess = status;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
