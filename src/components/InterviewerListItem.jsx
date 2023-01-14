import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

// Displays an interviewer and applies styles/functionality based on props
const InterviewerListItem = (props) => {

  // Updates class name based on whether prop is true or false
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={ interviewerClass } onClick={ props.setInterviewer }>
      <img
        className="interviewers__item-image"
        src={ props.avatar }
        alt={ props.name }
      />
      { props.selected && <span>{ props.name }</span> }
    </li>
  );
  
};

export default InterviewerListItem;