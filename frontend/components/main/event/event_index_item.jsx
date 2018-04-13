import React from 'react';
import { Link } from 'react-router-dom';


class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event,  } = this.props;
    return (
      <div className='event-index-item'>
        <Link to={`/events/${event.id}`}>
          <div className='event-index-item-image container'>
            <img className='event-index-item-image' src={event.img_url} />
          </div>
          <div className='event-index-details-box'>
            <div className='event-index-item-start'>
              {event.start_time}
            </div>
            <div className='event-index-item-title'>
              {event.title}
            </div>
            <div className='event-index-item-location'>
              {event.location}
            </div>
          </div>
          </Link>
      </div>
    );
  }
}

export default EventIndexItem;
