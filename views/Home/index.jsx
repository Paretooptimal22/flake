const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const Footer = require('../Footer')

module.exports = props => {
  return (
   <Layout>
     <Navbar/>
     <div className= "container">
        <br/>
        {/* Use google username to greet client */}
        <h1>Hello {props.username}! What would You like to do today?</h1>
        <div className="row">
          <div className="col-md-6"><div className="card">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yEcfsVHd-ff_EyYJV1P0WVDDHJuDBdqQUs6Zu4fux5u4F9vSww&s" alt="Card image cap" />

            <div className="card-body">
              <h5 className="card-title">Create Excuse</h5>
              <a href="http://localhost:3000/Excuses" className="stretched-link">Let's Flake!</a>
            </div>
          </div>
        </div>

        <br></br>
        
          <div className="col-md-6"><div className="card">
            <img className="card-img-top" src="https://images.idgesg.net/images/article/2019/04/google-calendar-android-100794956-large.jpg" alt="calpic"/>

            <div className="card-body">
              <h5 className="card-title">View Upcoming Events</h5>

              <a href="http://localhost:3000/Calendar" className="stretched-link">Let's See What were Skipping</a>
            </div>
          </div>
          </div>

        </div>
      </div>
      {/* Passing google_id to client using empty div */}
      <div id="tempStorage" data-google_id={props.google_id}></div>

      <script src="./home.js"/>
      <br/>
<     Footer/>
   </Layout>

  )
}