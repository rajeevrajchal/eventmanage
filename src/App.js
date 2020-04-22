import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routing/Routes'
import { connect } from 'react-redux';
import * as actions from './redux/action'
import Toast from './component/Toast'

const App = (props) => {
  useEffect(() => {
    props.checkAuthentication();
  }, [props.checkAuthentication]);

  return (
    <>
      <Toast />
      <Routes />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthentication: () => dispatch(actions.checkAuthentication())
  }
}


export default connect(null, mapDispatchToProps)(App);
