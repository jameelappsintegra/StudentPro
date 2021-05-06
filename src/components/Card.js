import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/student-1.jpg';

const Card = (props) => {
    return (
        <div>
            {!props.isStudentList ?
                <Link className="card" to={`/${props.link}`}>
                    <div className="card-body">
                        <div className="icon">
                            <img src={props.icon} alt="{props.copy}" />
                        </div>
                        <p>{props.copy}</p>
                    </div>
                </Link>
                :
                <div className="card student-card" key={props.i}>
                    <div className="card-body">
                        <div className="student-profile">
                            <div className="icon">
                                <img src={img} alt="{props.copy}" />
                            </div>
                            <h4 className="copy">{props.name}</h4>
                        </div>
                        <div className="class">
                            <label htmlFor="class">Class</label>
                            <p>{props.class}</p>
                        </div>
                        <div className="roll">
                            <label htmlFor="roll">Roll No</label>
                            <p>{props.roll}</p>
                        </div>
                        <div className="year">
                            <label htmlFor="year">Year</label>
                            <p>{props.fromYear} - {props.toYear}</p>
                        </div>
                        <button className="btn btn-sm btn-primary" onClick={() => studentDetails()}>show detail</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default Card;