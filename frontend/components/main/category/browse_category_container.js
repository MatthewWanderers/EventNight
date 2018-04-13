import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/events_actions';
import BrowseCategory from './browse_category';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
fetchEvents: (data) => dispatch(fetchEvents(data)),
});

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(BrowseCategory));
