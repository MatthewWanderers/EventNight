navbar needs to render logo/link
then searchbar/emptyspace
then navlinks
* browse events
* organize
   * overview
   * pricing
   * blog
   * resources
* help
   * where are my tickets
   * how to contact the event organizer
   * help center
* Sign in
   * opens signin modal 'let's get started' input email
     * goes to signin/login modal if already a user to grab password
     * goes to welcome if not a user. edit email, takes first/last name, password
* Create Event
     * opens signin modal if not logged in

if logged in, Sign in is replaced with current_user.firstname
   * tickets
   * saved

   * manage events
   * contacts
   * account settings
   * logout

minimum view is < 480px,
search magnifying glass appears at 480px on browse, but not main page
single column becomes double at >=480 as well(not navbar related)
likewise, picture renders behind searchbar at >=480px

at 800px:
navbar: organize and create event appears
       help and create event disappear from user drop-down
double columns becomes 3 columns
header font size increases

at 1000px:
navbar: browse events, help reappear, no further changes
