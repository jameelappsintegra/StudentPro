import React from 'react';

const StudentProfile = (props)=>{
    return (
        <>
        <div className="student-profile">
            <div>
                <h3>Ansh Sharma</h3>
                <small>Class XI-B | Roll no: 04</small>
                <h6 className="sub-title">2020-2021</h6>
            </div>
            <img src={props.studentPhoto} alt="Ansh Sharma" width="48"  />
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
        </>
    )
}

export default StudentProfile;