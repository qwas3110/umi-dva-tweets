import styles from './index.css';
import React from 'react';
import { connect } from 'dva';
import Dashboard from '@/components/Dashboard';
import NewTweet from '@/components/NewTweet';
import TweetPage from '@/components/TweetPage';
import {Route} from 'umi';
import Nav from '@/components/Nav';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'global/handleInitialData'
    })
  }

  render() {
    return (
      <div className='container'>
        <Nav/>
        {
          this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>
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


