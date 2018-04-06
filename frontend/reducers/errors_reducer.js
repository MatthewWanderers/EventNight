import sessionErrorsReducer from './session_errors_reducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
  session: sessionErrorsReducer
});
