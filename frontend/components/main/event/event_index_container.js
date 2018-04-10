import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/events_actions';
import EventIndex from './event_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
fetchEvents: () => dispatch(fetchEvents()),
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(EventIndex));
