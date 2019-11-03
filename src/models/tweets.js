import {saveLikeToggle,saveTweet} from '@/utils/api';





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
    },
    addTweet (state, action) {
      const tweet = action.tweet;


      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo] : {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
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
    *handleAddTweet({ type, payload: {text,author,replyingTo} }, { put, call, select }) {
      // const author = yield select(state => state.authUser);

      const tweet = yield call(saveTweet,text,author,replyingTo);
      yield put({type: 'addTweet',tweet});

    }
  },
}
