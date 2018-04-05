import React from 'react';
import { Link } from 'react-router-dom';

// navbar needs to render logo/link
// then searchbar/emptyspace
// then navlinks
// * organize
//    * overview
//    * pricing
//    * blog
//    * resources
// * Sign in
//    * opens signin modal 'let's get started' input email
//      * goes to signin/login modal if already a user to grab password
//      * goes to welcome if not a user. edit email, takes first/last name, password
// * Create Event
//
// if logged in, Sign in is replaced with current_user.firstname
//    * tickets
//    * saved
//
//    * manage events
//    * contacts
//    * account settings
//    * logout
//
// minimum view is < 480px,
// search magnifying glass appears at 480px on browse, but not main page
// single column becomes double at >=480 as well(not navbar related)
// likewise, picture renders behind searchbar at >=480px
//
// at 800px:
// navbar: organize and create event appears
//        help and create event disappear from user drop-down
// double columns becomes 3 columns
// header font size increases
//
// at 1000px:
// navbar: browse events, help reappear, no further changes
//
//
//
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div className="navbar">
            <h1><a href="/"><img src="…" alt="EventNight Logo">EventNight</a></h1>
            <p>searchbar placeholder</p>
            <ul className='navlinks'>
                <li><Link to '/'>Browse Events</Link></li>
                <li>Organize</li>
                <li>Help</li>
                <li><a href="#">Sign in</a></li>
                <li><a href="#">Create Event</a></li>
              </ul>
        </div>
      </nav>
    );
  }
}

export default Contacts;
