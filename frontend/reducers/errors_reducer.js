import session from './session_errors_reducer.js';
import event from './event_errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session,
    event,
});
