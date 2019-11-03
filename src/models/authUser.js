

export default {
  namespace: 'authUser', // 默认与文件名相同
  state: null,
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    authUser(state, action) {
      return action.id
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
