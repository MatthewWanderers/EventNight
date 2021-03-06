import { RECEIVE_EVENT_ERRORS, RECEIVE_EVENT, CLEAR_ERRORS } from '../actions/events_actions';
// import { CLEAR_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';
const _nullErrors = [];

const eventErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT_ERRORS:
    if (action.errors === undefined) return state;
      return action.errors;
    case RECEIVE_EVENT:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default eventErrorsReducer;
