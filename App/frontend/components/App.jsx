import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './navbar/nav_bar_container';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute exact path="/login" component={SignInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/" component={SignUpFormContainer} />
    <footer>this is the footer</footer>
  </div>
);

export default App;

// turn nav bar into protexcted route
