
const state = {
  lang: 'zh_CN'
}

const mutations = {
  SET_LANG: (state, value) => {
    state.lang = value
  }
}

const actions = {
  setLang({ commit }, value) {
    commit('SET_LANG', value)
  }
}

const getters = {
  getLang: state => state.lang
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
