import GoodService from '@/services/goodService';

export const SET_GOODS = 'setGoods';
export const SET_SEARCH = 'SET_SEARCH';

const state = {
  // Initial state of your store
  all: [],
  search: '',
};

const getters = {
  // Getters to access your store values
  GoodsByText: ({ all, search: { text } }) => {
    if (!text) {
      return all;
    }
    text.toLowerCase();
    return state.all.filter((good) => good.product_name.toLowerCase().includes(text));
  },
};

const actions = {
  getAllGoods({ commit }) {
    GoodService.fetchGoods().then(({ data }) => {
      commit(SET_GOODS, data);
    });
  },
  filter({ commit }, text) {
    commit(SET_SEARCH, text);
  },
};

const mutations = {
  [SET_GOODS](state, goods) {
    state.all = goods;
  },
  [SET_SEARCH](state, text) {
    state.search = text;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
