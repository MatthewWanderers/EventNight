import React from 'react';
import EventIndexItem from './event_index_item.jsx';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchEvents();
  // }
  //
  componentDidMount(){
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    return(
      <div className='event-index-page'>
        <div className='large-splash-image-container' id='cf4a'>
          <img className='large-splash-image'
            src="https://res.cloudinary.com/do2qcwqsc/image/upload/v1523596737/PampaBBQ-Napa-043.jpg"></img>
          <img className='large-splash-image'
            src="https://res.cloudinary.com/do2qcwqsc/image/upload/v1523568659/headlineImage.adapt.1460.high.flag_florida_262015.1423268174485.jpg"></img>
          <img className='large-splash-image'
            src="https://res.cloudinary.com/do2qcwqsc/image/upload/v1523567468/San_francisco_in_fog_with_rays.jpg"></img>
          <img className='large-splash-image'
            src="https://res.cloudinary.com/do2qcwqsc/image/upload/v1523596476/best-workplaces-in-the-bay-area-2017-salesforce.jpg"></img>
        </div>
        <div className='search-bar-over-background-image'>
          Find your next experience
        </div>
        <div className='divider-text'>
          Events for you in the Bay Area
        </div>



        <section className='event-index-listings'>
            {events.map(event => <EventIndexItem
              key={`event-${event.id}`}
              event={event}
              currentUser={this.props.currentUser}
              history={this.props.history} />)}
        </section>
      </div>
    );
  }

}

export default EventIndex;
