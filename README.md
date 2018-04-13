# Eventnight

Eventnight allows users to create Events in Bay Area cities and share them with friends.
Logged in users can browse events by city and category type and event creators can edit and delete their events. Its backend is built with Rails running a PostGreSQL database and its frontend is built using React/Redux.

## Demo
Check out the
[Live Eventnight Demo](https://eventnight.herokuapp.com/)!
For more info on what's going on behind the scenes, head over to the [Eventnight Wiki](https://github.com/MatthewWanderers/EventNight/wiki).

## Site

* #### Login/Sign Up
On arrival to Eventnight, users are prompted to create an account or log in. The Demo Account is ready to go, or you can create your own account! After logging in, users are brought to the main page.
![Login/Signup](https://github.com/MatthewWanderers/EventNight/blob/master/app/assets/images/log_in.gif)


* #### Main Page
The main page proudly displays all created events, which users can meander their way through. If you're looking for a specific kind of event or events close to you, head over to Browse Events in the navbar.
* #### Browse by Location or Category
Users can browse events by city or category type using a handy form at the top of the page which filters events.
![Navigating](https://github.com/MatthewWanderers/EventNight/blob/master/app/assets/images/navigating.gif)

   Here's a snapshot of the city selector, which although simple, I'm particularly proud of:
```html
<form className='event-Form-label'>
  <select
    className='browse-form-dropdown' onChange={this.update('city_name')}>
    <option disabled="disabled">Select a city</option>
    <option value=''>All Cities</option>
    <option value="San Francisco">San Francisco</option>
    <option> ...Other choices... </option>
  </select>
  <br/>
  <Link className="browse-submit" to={`/location/${city_name}`}>Browse by City</Link>
</form>
```

* ### Event Creation
Anyone adventurous enough to host their own event can easily set one up using the create events feature. You can edit or delete your event at any time if you need to update details or cancel.
Creating an Event:
![Creating an Event](https://github.com/MatthewWanderers/EventNight/blob/master/app/assets/images/creating_event.gif)
Editing an Event:
![Editing an Event](https://github.com/MatthewWanderers/EventNight/blob/master/app/assets/images/editing_event.gif)

   The same form handles creation and editing events through inline booleans:
```html
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
```
* ### Event Show Page
The event show page allows quick access to important information about events and helps event organizers stand out.
## Future Direction

* #### Event Ticket Registration
The next step for Eventnight will be our ticket system. Event Organizers will be able to specify different types and amounts of tickets and users will be able to reserve their spaces at events.
* #### Bookmarking
Users will want an easy way to see events they have tickets for, so the next step is to give them a bookmarks page where they can view past events, upcoming events, and bookmarked events. Users will be able to bookmark events from the show, browse, and home pages.
* #### Google Maps Integration
Finally, when browsing by location or category type, users will be able to see events clustered on a map of the Bay Area. While on the show page, users will be able to see the address and map for the selected event.


##
