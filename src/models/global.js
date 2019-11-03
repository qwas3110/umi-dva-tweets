import {getInitialData} from '@/utils/api';





export default {
  namespace: 'global', // 默认与文件名相同
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {

  },
  effects: {
    *handleInitialData({ type, payload }, { put, call, select }) {
      const { users, tweets } = yield call(getInitialData);
      const id = 'tylermcginnis';

      yield put({type:'users/receiveUsers', users});
      yield put({type: 'tweets/receiveTweets', tweets});
      yield put({type: 'authUser/authUser', id});


    },
  },
}
