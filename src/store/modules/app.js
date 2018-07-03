import * as types from '../mutation-types'

const state = {
  feedback: false
}

const mutations = {
  [types.OPEN_FEEDBACK]: state => {
    state.feedback = true
  },
  [types.CLOSE_FEEDBACK]: state => {
    state.feedback = false
  }
}

const actions = {
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
