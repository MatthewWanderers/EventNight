import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props => (
      !loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    ))}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props => (
      loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    ))}/>
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
}



// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
