import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) =>{
  return <Link className="card" to={`/${props.link}`}>
      <div className="card-body">
          <div className="icon">
              <img src={props.icon} alt="{props.copy}" />
          </div>
          <p>{props.copy}</p>
      </div>
  </Link>;
}

export default Card;