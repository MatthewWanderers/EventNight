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
        </div>
        <div className='search-bar-over-background-image'>
          Find your next experience
        </div>
        <div className='divider-text'>
          Events for you
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
