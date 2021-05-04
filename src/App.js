import React from "react";
import studentProfile from './assets/img/student-1.jpg';
import Menu from './Menu'
import Main from "./Main";
import StudentDetails from "./StudentDetails";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <div className="student-main">
          <div className="wrapper">
            <div className="container">
                <div className="header">
                    <div className="humburger">
                        <i className="las la-bars"></i>
                    </div>
                    <Header title="Profile" />
                    <div className="edit">
                        <i className="las la-user-edit"></i>
                    </div>
                </div>

                <div className="student-profile">
                    <div>
                        <h3>Ansh Sharma</h3>
                        <small>Class XI-B | Roll no: 04</small>
                        <h6 className="sub-title">2020-2021</h6>
                    </div>
                    <img src={studentProfile} alt="Ansh Sharma" width="48"  />
                </div>
                <div className="card contact-card">
                    <div className="card-body">
                        <div className="contact-row">
                            <i className="las la-phone"></i>
                            +91 987892345656
                        </div>
                        <div className="contact-row">
                            <i className="las la-envelope"></i>
                            ansushsh@email.com
                        </div>
                    </div>
                </div>
                <BrowserRouter>
                  <Menu />
                  <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/student-details" component={StudentDetails} />
                  </Switch>
                </BrowserRouter>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}


const Header = (props) =>{
    return <h4>{props.title}</h4>;
}

const Card = (props) =>{
  return <div className="card">
      <div className="card-body">
          <div className="icon">
              <img src={props.icon} alt="{props.copy}" />
          </div>
          <p>{props.copy}</p>
      </div>
  </div>;
}

export default App;
