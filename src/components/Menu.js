import React from 'react';
import Header from './Header'

function Nav(){
    return(
      <>
        <div className="header">
            <div className="humburger">
                <i className="las la-bars"></i>
            </div>
            <Header title="Profile" />
            <div className="edit">
                <i className="las la-user-edit"></i>
            </div>
        </div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student-details">Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li>
        </ul> */}
      </>
    )
}
export default Nav;