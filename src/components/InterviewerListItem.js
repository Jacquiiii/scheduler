import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";


// renders an interviewer and applies styles/functionality based on props
export default function InterviewerListItem(props) {

  // updates class name based on whether prop is true or false
  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li onClick={() => props.setInterviewer(props.id)} className={interviewerListItemClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <span>{props.name}</span>}
    </li>
  );
  
}