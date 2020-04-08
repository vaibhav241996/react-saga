import React from 'react';
import { connect } from 'react-redux';
import { sagaCall } from './actions';

class Home extends React.Component {
  render() {
    return (<div onClick={() => this.props.sagaCall()}>Home</div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  sagaCall: () => dispatch(sagaCall())
});

export default connect(null, mapDispatchToProps)(Home);