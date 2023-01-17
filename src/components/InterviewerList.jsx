import React from "react";
import PropTypes from 'prop-types';

import InterviewerListItem from "components/InterviewerListItem";

import "components/InterviewerList.scss";

// Displays a list of InterviewerListItem components
const InterviewerList = (props) => {

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  const interviewerListItems = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={ interviewer.id }
        name={ interviewer.name }
        avatar={ interviewer.avatar }
        selected={ interviewer.id === props.value }
        setInterviewer={ () => props.onChange(interviewer.id) }
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{ interviewerListItems }</ul>
    </section>
  );

};

export default InterviewerList;