import { combineReducers } from 'redux';
import events from './events_reducer';
// import BookmarksReducer from './bookmarks_reducer';
// import RegistrationReducer from './registration_reducer';
// import TicketsReducer from './tickets_reducer';

export default combineReducers({
  events,
  // userBookmarks: BookmarksReducer,
  // userRegistrations: RegistrationReducer
  // ticket: TicketsReducer
});
