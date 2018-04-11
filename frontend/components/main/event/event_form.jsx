import React from 'react';
import UploadButton from './upload_button';
import merge from 'lodash/merge';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.event === undefined) {
      this.state = { title: "", description: "", location_id: "", start_time: "",
        address: "", start: "", end: "", organizer_id: this.props.currentUser.id,
        end_time: "", img_url: "", category_id: "",
      };
    }else {
      this.state = props.event;
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
      this.setState({ title: "", description: "", location_id: "", start_time: "",
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


  // <button className='form-publish' onClick={this.handleSubmit}>Publish</button>

  render() {
    const { title, description, location_id, address, start, end,
      organizer_id, end_time, img_url, category_id, } = this.state;
    return (
      <div className="new-update-event">

        <div className='form-header'>
          <h3 className='form-title'>Create An Event</h3>
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
            <select onChange={this.update('location_id')}
              className='event-form-dropdown' value={location_id}>
              <option value="">Select a city</option>
              <option value='1'>San Francisco</option>
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
                onChange={this.update('end_time')}
                value={end_time}/>
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
              <option value='1'>Food & Drink</option>
              <option value='2'>Classes</option>
              <option value='3'>Arts</option>
              <option value='4'>Parties</option>
              <option value='5'>Sports & Wellness</option>
              <option value='6'>Networking</option>
            </select><br/>
          </label>

          <input
            className='event-submit'
            type='submit'
            value='MAKE YOUR EVENT LIVE' />
        </form>
      </div>
    );
  }
}


export default EventForm;

// for future ticket iteration
//<button className='ticket-delete-button' onClick={this.handleDeleteTicket}>Delete</button>
