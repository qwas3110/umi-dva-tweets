import styles from './index.css';
import React from 'react';
import { connect } from 'dva';
import Dashboard from '@/components/Dashboard';
import NewTweet from '@/components/NewTweet';
import TweetPage from '@/components/TweetPage';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'global/handleInitialData'
    })
  }

  render() {
    return (
      <div>
        {
          this.props.loading === true
            ? null
            : <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>
        }
      </div>
    );
  }
}



export default connect(
  ({authUser}) => ({
    loading: authUser === null
  })
)(App);


