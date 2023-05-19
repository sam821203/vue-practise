import { createStore } from 'vuex';

import productsModules from './modules/products.js';
import cartModules from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productsModules,
    cart: cartModules
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;