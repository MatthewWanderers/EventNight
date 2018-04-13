import { connect } from 'react-redux';
import EventForm from './event_form';
import {
    fetchEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    clearErrors
  } from '../../../actions/events_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let event;
  const errors = state.errors.event;
  const eventId = ownProps.match.params.eventId;

  if (ownProps.match.path === '/events/:eventId/edit') {
    event = state.entities.events[eventId];
  }

  return {
    event,
    eventId,
    errors,
    deleteEvent,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  let formType;
  if (ownProps.match.path === '/events/:eventId/edit') {
    action = (event) => dispatch(updateEvent(event));
    formType = 'Update';
  } else {
    action = (event) => dispatch(createEvent(event));
    formType = 'Create';
  }

  return {
    action,
    formType,
    clearErrors: () => dispatch(clearErrors()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
