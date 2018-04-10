import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import NavBarContainer from './navbar/nav_bar_container';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import EventIndexContainer from './main/event/event_index_container';
// import BrowseEventsContainer from './main/events/browse_events_container';
// import EventFormContainer from './main/./events/event_form_container';
// <ProtectedRoute exact path='/' component={EventIndexContainer} />
import EventShowContainer from './main/event/event_show_container';



const App = ({store}) => (
  <div>
    <ProtectedRoute path='/' component={NavBarContainer} />
    <Switch>
      <Route exact path='/' component={EventIndexContainer} />
      <AuthRoute exact path="/login" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path='/events/:eventId'component={EventShowContainer} />
      </Switch>
  </div>
);

export default App;

// turn nav bar into protexcted route
