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
                <li><Link to='/'>Browse Events</Link></li>
                <li><a href="#">Organize</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#" onClick={this.props.logout}>Log out</a></li>
                <li><a href="#">{this.props.currentUser.username}</a></li>
                <li><a href="#">Create Event</a></li>
              </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
