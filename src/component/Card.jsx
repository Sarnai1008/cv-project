import React from "react";
import PropTypes from 'prop-types';


Card.propTypes = {
    date:PropTypes.string,
    title:PropTypes.string,
    context: PropTypes.string,
    icon: PropTypes.any,
    icon2: PropTypes.any
  }

function Card(props){
    return<div>
        <h3>{props.icon} {props.date}</h3>
        <div className="context">
        <h4>{props.icon2} {props.title}</h4>
        <p>{props.context}</p>
        </div>
    </div>
}
export default Card;