import React from 'react';

import Card from '../components/Card'

import quiz from "../assets/icons/ic_quiz.svg";
import Syllabus from "../assets/icons/ic_assignment.svg";
import Attendance from "../assets/icons/ic_event.svg";
import Hoildays from "../assets/icons/ic_holiday.svg";
import Results from "../assets/icons/ic_results.svg";
import TimeTable from "../assets/icons/ic_calendra.svg";

function Main() {
    return (
        <>

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
                <Card copy="Home Work" icon={quiz} link="student-details" />
                <Card copy="Syllabus" icon={Syllabus} link="student-list" />
                <Card copy="Attendance" icon={Attendance} />
                <Card copy="School Hoildays" icon={Hoildays} />
                <Card copy="Results" icon={Results} />
                <Card copy="Time Table" icon={TimeTable} />
            </div>
        </>
    )
}
export default Main;