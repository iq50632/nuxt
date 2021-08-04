import _ from 'lodash';
const state = () => ({
  name: '',
  email: '',
  account: '',
  password: '',
  shopping: []
});

const getters = {
  shopping: state => state.shopping
};

const mutations = {
  get_name(state, value) {
    state.name = value;
  },
  get_email(state, value) {
    state.email = value;
  },
  get_account(state, value) {
    state.account = value;
  },
  get_password(state, value) {
    state.password = value;
  },
  get_shopping(state, value) {
    let item = {
      name: value.name,
      img: value.img,
      size: [{
        size: value.size,
        number: value.number
      }]
    }
    if (state.shopping.length > 0) {
      let name_pos = _.findIndex(state.shopping, ['name', value.name])
      if (name_pos != -1) {
        let size_pos = _.findIndex(state.shopping[name_pos].size, ['size', value.size])
        if (size_pos != -1) {
          state.shopping[name_pos].size[size_pos].number += value.number
        } else {
          state.shopping[name_pos].size.push(item.size[0])
        }
      } else {
        state.shopping.push(item)
      }
    } else {
      state.shopping.push(item)
    }
    state.shopping = _.compact(state.shopping)
  }
};

const actions = {
  async set_name({
    state,
    commit
  }, val) {
    commit('get_name', val);
  },
  async set_email({
    state,
    commit
  }, val) {
    commit('get_email', val);
  },
  async set_account({
    state,
    commit
  }, val) {
    commit('get_account', val);
  },
  async set_password({
    state,
    commit
  }, val) {
    commit('get_password', val);
  },
  async set_shopping({
    state,
    commit
  }, val) {
    commit('get_shopping', val);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
