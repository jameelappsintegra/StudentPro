import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import studentProfile from './assets/img/student-1.jpg';
import quiz from "./assets/icons/ic_quiz.svg";
import Syllabus from  "./assets/icons/ic_assignment.svg";
import Attendance from "./assets/icons/ic_event.svg";
import Hoildays from "./assets/icons/ic_holiday.svg";
import Results from "./assets/icons/ic_results.svg" ;
import TimeTable from "./assets/icons/ic_calendra.svg";

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
                <div className="student-cards">
                    <Card copy="Home Work" icon={quiz} />
                    <Card copy="Syllabus" icon={Syllabus} />
                    <Card copy="Attendance" icon={Attendance} />
                    <Card copy="School Hoildays" icon={Hoildays} />
                    <Card copy="Results" icon={Results} />
                    <Card copy="Time Table" icon={TimeTable} />
                </div>
                <div>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

const HomePage = () => <h1>Home Page</h1>;
const AboutPage = () => <h1>About Page</h1>;


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
