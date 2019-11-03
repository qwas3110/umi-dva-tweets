

export default {
  namespace: 'users', // 默认与文件名相同
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    receiveUsers(state, action) {
      return {
        ...state,
        ...action.users,
      }
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
