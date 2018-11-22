import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import LoginWithLoading from '../../components/HOC/WithLoading';
import { actionCreator } from '../../../redux/login/actions';

const Login = ({ handleSubmit, loginFail, isLoading }) => (
  <LoginWithLoading handleSubmit={handleSubmit} loginFail={loginFail} isLoading={isLoading} />
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  loginFail: state.login.loginFail,
  isLoading: state.login.isLoading
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool,
  isLoading: PropTypes.bool
};

const loginForm = reduxForm({ form: 'Login' })(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
