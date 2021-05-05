import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import studentPhoto from './assets/img/student-1.jpg';
import Menu from './components/Menu'
import Main from "./pages/Main";
import StudentDetails from "./pages/StudentDetails";
import StudentProfile from "./pages/StudentProfile";
import StudentList from "./pages/StudentList";

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
              <Route path="/student-list" component={StudentList} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default App;
