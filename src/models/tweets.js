import {saveLikeToggle} from '@/utils/api';



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
    },
    toggleTweet(state,action) {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true
            ? state[action.id].likes.filter(uid => uid !== action.authUser)
            : state[action.id].likes.concat([action.authUser])
        }
      }
    }
  },
  effects: {
    *handleToggleTweet({ type, payload:{id,hasLiked,authUser} }, { put, call, select }) {
      yield put({type: 'toggleTweet', id,hasLiked,authUser});

      try {
        yield call(saveLikeToggle, id,hasLiked,authUser)
      } catch (e) {
        console.warn("Error",e);
        yield put({type: 'toggleTweet', id,hasLiked,authUser});
        alert('Try Again!');
      }
    },
  },
}
