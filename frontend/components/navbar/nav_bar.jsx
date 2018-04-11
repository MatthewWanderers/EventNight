import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <nav>
        <div className="navbar">
            <h1 className='logo'><a href='/'>Eventnight</a></h1>

            <ul className='navlinks'>
                <li><a href="#" onClick={this.props.logout}>Log out</a></li>
                <li><a href="#">{this.props.currentUser.username}</a></li>
                <li><Link to="/events/new">Create Event</Link></li>
              </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;




// <li><Link to='/'>Browse Events</Link></li>
