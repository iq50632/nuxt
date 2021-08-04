const state = () => ({
  trader: '',
  name: '',
  text: '',
  price: 0,
  brand: '',
  stock: 0,
  sold: 0,
  size: '',
});

const getters = {
  getproduct: (state) => {
    return state;
  }
};

const mutations = {
  Get_Trader(state, value) {
    state.trader = value;
  },
  Get_Name(state, value) {
    state.name = value;
  },
  Get_Price(state, value) {
    state.price = value;
  },
  Get_Brand(state, value) {
    state.brand = value;
  },
  Get_Stock(state, value) {
    state.stock = value;
  },
  Get_Sold(state, value) {
    state.sold = value;
  },
  Get_Size(state, value) {
    state.size = value;
  },
};

const actions = {
  async Get_Trader({state, commit}, val) {
    commit('Set_Trader', val);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

