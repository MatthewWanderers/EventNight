import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import NavBarContainer from './navbar/nav_bar_container';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {
  AuthRoute,
  ProtectedRoute,
} from '../util/route_util';
import EventIndexContainer from './main/event/event_index_container';
import BrowseLocationContainer from './main/location/browse_location_container';
import BrowseCategoryContainer from './main/category/browse_category_container';
import EventFormContainer from './main/event/event_form_container';
import EventShowContainer from './main/event/event_show_container';

const App = ({store}) => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Switch>
      <Route exact path='/' component={EventIndexContainer} />
      <Route exact path='/events/new' component={EventFormContainer} />
      <Route exact path='/events/:eventId/edit' component={EventFormContainer} />
      <Route exact path='/events/:eventId'component={EventShowContainer} />
      <Route exact path='/location/:city_name'component={BrowseLocationContainer} />
      <Route exact path='/location/'component={BrowseLocationContainer} />
      <Route exact path='/category/:category_id'component={BrowseCategoryContainer} />
      <Route exact path='/category/'component={BrowseCategoryContainer} /> */}
      {/* <Route exact path="/login" component={SignInFormContainer} /> */}
      {/* <Route exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
