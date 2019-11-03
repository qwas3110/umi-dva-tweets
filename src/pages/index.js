import styles from './index.css';
import React from 'react';
import { connect } from 'dva';
import Dashboard from '@/components/Dashboard';



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
            : <Dashboard/>
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

