import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/events_actions';
import BrowseLocation from './browse_location';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
fetchEvents: (data) => dispatch(fetchEvents(data)),
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(BrowseLocation));
