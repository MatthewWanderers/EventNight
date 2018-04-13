import React from 'react';
import EventIndexItem from '../event/event_index_item.jsx';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { city_name: ``, category_id: ``, loc_desc: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop) {
    return (e) => (
      this.setState({[prop]: e.target.value})
    );
  }

  componentDidMount(){
    // debugger
    this.props.fetchEvents(this.props.match.params);
  }

componentWillReceiveProps(nextProps) {
  // debugger
  if (
    this.props.match.params.city_name !==
    nextProps.match.params.city_name
  ) {
    this.props.fetchEvents(nextProps.match.params)
  }
}

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { events } = this.props;
    const { city_name, category_id,  } = this.state;

    // debugger
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
          {
            this.props.location.pathname === '/location/' &&
            "Events for you in the Bay Area"
          }
          {
            this.props.location.pathname !== '/location/' &&
              (this.props.match.params.city_name !== 'Other' &&
               `Events for you in ${this.props.match.params.city_name}`)
          }
          {
            this.props.location.pathname !== '/location/' &&
              (this.props.match.params.city_name === 'Other' &&
               `Events for you in other cities`)
          }
        </div>
        <div className='divider-text-browse'>
        </div>
        <div className="browse-by-stuff">

          <form className='event-Form-label'>
            <select
              className='browse-form-dropdown' onChange={this.update('city_name')}>
              <option disabled="disabled">Select a city</option>
              <option value=''>All Cities</option>
              <option value="San Francisco">San Francisco</option>
              <option value='Oakland'>Oakland</option>
              <option value='Berkeley'>Berkeley</option>
              <option value='San Jose'>San Jose</option>
              <option value='Palo Alto'>Palo Alto</option>
              <option value='Other'>Other Cities</option>
            </select>
            <br/>
            <Link className="browse-submit" to={`/location/${city_name}`}>Browse by City</Link>
          </form>
          <form className='eventForm-label'>
            <select
              className='browse-form-dropdown' onChange={this.update('category_id')}>
              <option disabled="disabled">Select a category</option>
              <option value=''>All Categories</option>
              <option value='Music'>Music</option>
              <option value='Food & Drink'>Food & Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'>Parties</option>
              <option value='Sports & Wellness'>Sports & Wellness</option>
              <option value='Networking'>Networking</option>
            </select><br/>
          <Link className="browse-submit" to={`/category/${category_id}`}>Browse by Category</Link>

        </form>
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
