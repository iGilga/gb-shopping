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
  cartGoods: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const good = rootState.goods.all.find((g) => g.id_product === id);
      return {
        id: good.id_product,
        title: good.product_name,
        price: good.price,
        quantity,
      };
    });
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartGoods.reduce((total, good) => {
      return total + good.price * good.quantity;
    }, 0);
  },
};

const actions = {
  // Asynchronous mutations commits to modify cart
  addGoodToCart({
    commit,
    state
  }, good) {
    const cartItem = state.items.find((item) => item.id === good.id_product);
    if (!cartItem) {
      commit('addCart', { id: good.id_product });
    } else {
      commit('incrementItemQuantity', cartItem);
    }
  },
  removeCart({ commit, state }, good) {
    const cartItem = state.items.find((g) => g.id === good.id);
    console.log(cartItem);
    if (cartItem.quantity > 1) {
      console.log('desc');
      commit('descrementItemQuantity', cartItem);
    } else {
      commit('removeCart', cartItem);
    }
  },
};

const mutations = {
  // Synchronous modifications of cart
  [addCart] (state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
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
