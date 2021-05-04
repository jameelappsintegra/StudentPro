import React from 'react';

import studentProfile from './assets/img/student-1.jpg';
import quiz from "./assets/icons/ic_quiz.svg";
import Syllabus from  "./assets/icons/ic_assignment.svg";
import Attendance from "./assets/icons/ic_event.svg";
import Hoildays from "./assets/icons/ic_holiday.svg";
import Results from "./assets/icons/ic_results.svg" ;
import TimeTable from "./assets/icons/ic_calendra.svg";

function Main() {
    return(
        <>
        <div className="student-cards">
            <Card copy="Home Work" icon={quiz} />
            <Card copy="Syllabus" icon={Syllabus} />
            <Card copy="Attendance" icon={Attendance} />
            <Card copy="School Hoildays" icon={Hoildays} />
            <Card copy="Results" icon={Results} />
            <Card copy="Time Table" icon={TimeTable} />
        </div>
        </>
    )
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

export default Main;