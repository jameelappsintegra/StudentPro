import React from "react";
import studentPhoto from './assets/img/student-1.jpg';
import Menu from './components/Menu'
import Main from "./Main";
import StudentDetails from "./StudentDetails";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentProfile from "./StudentProfile";

function App() {
  return (
    <div className="student-main">
        <div className="wrapper">
        <div className="container">
            <Menu />
            <StudentProfile studentPhoto={studentPhoto} />
            <BrowserRouter>
                <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/student-details" component={StudentDetails} />
                </Switch>
            </BrowserRouter>
        </div>
        </div>
    </div>
  );
}
export default App;
