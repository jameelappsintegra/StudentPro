import React from 'react';

const StudentProfile = (props) => {
    return (
        <div>
            <div className="student-profile">
                <div>
                    <h3>Ansh Sharma</h3>
                    <small>Class XI-B | Roll no: 04</small>
                    <h6 className="sub-title">2020-2021</h6>
                </div>
                <img src={props.studentPhoto} alt="Ansh Sharma" width="48" />
            </div>

        </div>
    )
}

export default StudentProfile;