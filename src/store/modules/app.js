import * as types from '../mutation-types'

const state = {
  drawer: true,
  feedback: false
}

const mutations = {
  [types.TOGGLE_DRAWER]: state => {
    state.drawer = !state.drawer
  },
  [types.OPEN_FEEDBACK]: state => {
    state.feedback = true
  },
  [types.CLOSE_FEEDBACK]: state => {
    state.feedback = false
  }
}

const actions = {
  toggleDrawer: ({ commit }) => {
    commit(types.TOGGLE_DRAWER)
  },
  openFeedback: ({ commit }) => {
    commit(types.OPEN_FEEDBACK)
  },
  closeFeedback: ({ commit }) => {
    commit(types.CLOSE_FEEDBACK)
  }
}

export default {
  state,
  mutations,
  actions
}
