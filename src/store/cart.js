import CartService from '@/services/cartService';

export const setCart = 'setCart';
export const addCart = 'addCart';
export const incrementItemQuantity = 'incrementItemQuantity';
export const descrementItemQuantity = 'descrementItemQuantity';
export const removeCart = 'removeCart';
const state = {
  // Initial state of cart
  items: [],
};

const getters = {
  // Getters to access cart values
  cartGoods: (state, getters, { goods: { all } }) => {
    if (all.length > 0) {
      return state.items.map(({ id, quantity }) => {
        const good = all.find((g) => g.id_product === id);
        return {
          id: good.id_product,
          title: good.product_name,
          price: good.price,
          quantity,
        };
      });
    } else {
      return [];
    }
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartGoods.reduce((total, good) => {
      return total + good.price * good.quantity;
    }, 0);
  },
};

const actions = {
  getCart({ commit }) {
    CartService.fetchCart().then(({ data }) => {
      commit(setCart, data);
    });
  },
  addGoodToCart({
    commit,
    state
  }, good) {
    const cartItem = state.items.find((item) => item.id === good.id_product);
    if (!cartItem) {
      const newCart = {
        id: good.id_product,
        quantity: 1,
      };
      commit('addCart', newCart);
      CartService.addCart(newCart).then((responses) => {
        console.log(responses);
      });
    } else {
      commit('incrementItemQuantity', cartItem);
      CartService.addCart(cartItem).then((responses) => {
        console.log(responses);
      });
    }
  },
  removeCart({ commit, state }, good) {
    const cartItem = state.items.find((g) => g.id === good.id);
    if (cartItem.quantity > 1) {
      console.log('desc');
      commit('descrementItemQuantity', cartItem);
    } else {
      commit('removeCart', cartItem);
    }
  },
};

const mutations = {
  [setCart] (state, cart) {
    state.items = cart;
  },
  [addCart] (state, cart) {
    state.items.push(cart);
  },
  [incrementItemQuantity] (state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity += 1;
  },
  [removeCart] (state, { id }) {
    state.items.splice(state.items.findIndex((x) => x.id === id), 1);
  },
  [descrementItemQuantity] (state, item) {
    item.quantity--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
