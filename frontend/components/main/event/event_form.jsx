import React from 'react';
import UploadButton from './upload_button';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.event === undefined) {
      this.state = { title: "", description: "", location: "", start_time: "",
        address: "", start: "", end: "", organizer_id: this.props.currentUser.id,
        end_time: "", img_url: "", category_id: "",
      };
    }else {
      this.state = props.event;
      this.state.start = props.event.start.slice(0,16);
      if (props.event.end) {
        this.state.end = props.event.end.slice(0,16);
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postImage = this.postImage.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
    if (this.props.location.pathname !== '/events/new') {
      this.props.fetchEvent(this.props.eventId);
    }
  }

  update(prop) {
    return (e) => (
      this.setState({[prop]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(id => this.props.history.push(`/events/${id}`));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors();
    }
    if ((nextProps.errors[0] === "Could not find event")
    && (nextProps.location.pathname === '/events/new')) {
      this.props.clearErrors();
      this.setState({ title: "", description: "", location: "", start_time: "",
              address: "", start: "", end: "", organizer_id: this.props.currentUser.id,
              end_time: "", img_url: "", category_id: "",
            });
    }
  }

  postImage(img_url) {
    this.setState({ img_url: img_url});
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <div className="form-errors">
          <ul>
            {this.props.errors.map((error, i) => (
              <li className='form-error-item'key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }


// make check to see whether to render Create of Edit based on event path.

  render() {
    const { title, description, location, address, start, end,
      organizer_id, end_time, img_url, category_id, start_time } = this.state;

      if (this.props.location.pathname !== '/events/new' && !this.state.owner) {
        return (
          <div className="unauthorized-user">You aren't allowed to be here
          </div>
        )
      }
    return (
      <div className="new-update-event">

        <div className='form-header'>
          {
            this.props.location.pathname === '/events/new' &&
                      <h3 className='form-title'>Create An Event</h3>
          }
          {
            this.props.location.pathname !== '/events/new' &&
                      <h3 className='form-title'>Edit Your Event</h3>
          }
        </div>

        <div className='divider'></div>
            {this.renderErrors()}
        <div className='event-details-section-header-details'>
          <div className='event-details-title'>Event Details</div>
        </div>
        <form className='event-form' onSubmit={this.handleSubmit}>
          <label><div className='eventForm-label'>EVENT TITLE</div>
            <input
              className='event-form-input'
              type='text'
              placeholder='Give it a short distinct name'
              onChange={this.update('title')}
              value={title}/><br/>
          </label>

          <label><div className='eventForm-label'>LOCATION</div>
            <input
              className='event-form-input'
              type='text'
              onChange={this.update('address')}
              value={address}/><br/>
          </label>

          <label><div className='eventForm-label'>CITY</div>
            <select onChange={this.update('location')}
              className='event-form-dropdown' value={location}>
              <option value="">Select a city</option>
              <option value='San Francisco'>San Francisco</option>
            </select><br/>
          </label>
          <div className='start-end-dates'>
            <label><div className='eventForm-label'>STARTS</div>
              <input
                className='event-form-input-date'
                type='datetime-local'
                onChange={this.update('start')}
                value={start}/>
            </label>

            <label><div className='eventForm-label'>ENDS</div>
              <input
                className='event-form-input-date'
                type='datetime-local'
                onChange={this.update('end')}
                value={end}/>
            </label>
          </div>

          <label><div className='eventForm-label'>EVENT IMAGE</div>
            <UploadButton
              postImage={this.postImage}
              imgUrl={this.state.img_url}
              clearErrors={this.props.clearErrors} />
          </label>

          <label><div className='eventForm-label'>EVENT DESCRIPTION</div>
            <textarea
              className='event-form-input-description'
              type='text'
              onChange={this.update('description')}
              value={description}/>
          </label>

          <div className='event-details-section-header'>
            <div className='event-details-title'>Additional Settings</div>
          </div>

          <label><div className='eventForm-label'>CATEGORY</div>
            <select onChange={this.update('category_id')}
              className='event-form-dropdown' value={category_id}>
              <option value="">Select a category</option>
              <option value='Music'>Music</option>
              <option value='Food & Drink'>Food & Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'>Parties</option>
              <option value='Sports & Wellness'>Sports & Wellness</option>
              <option value='Networking'>Networking</option>
            </select><br/>
          </label>
          <div className="event-form-buttons">
            <input
              className='event-submit'
              type='submit'
              value='MAKE YOUR EVENT LIVE' />
            {
              this.props.location.pathname !== '/events/new' &&
              <button
                className='event-delete'
                type="button"
                onClick={this.props.deleteEvent.bind(this, this.props.event)}>
                <Link to="/">DELETE EVENT</Link></button>
            }
          </div>
        </form>
      </div>
    );
  }
}


export default EventForm;

// for future ticket iteration
//<button className='ticket-delete-button' onClick={this.handleDeleteTicket}>Delete</button>
