

export default {
  namespace: 'tweets', // 默认与文件名相同
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    receiveTweets(state, action) {
      return {
        ...state,
        ...action.tweets
      }
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
