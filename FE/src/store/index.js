import { createStore } from 'vuex';
import products from './modules/products.module.js';
import cart from './modules/cart.module.js'
import user from "./modules/user.module.js"
import collection from "./modules/collection.module.js"
const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  strict: debug,
  modules: {
    products,
    cart,
    user,
    collection,
  },
});
export default store;